import { FC, ReactElement, FunctionComponent,
    cloneElement, useEffect, useState,
    Children, isValidElement, FormEventHandler, ChangeEventHandler, useRef, PropsWithChildren } from "react";
import { HTMLNativeProps } from '../native/types'
import { FormValues, FormProps, CustomObject } from "./types";

/**
 * 
 * @note all children must be salaxer's input components and other children will be ignored
 * @note all children must have name and type props
 * @note must have a submit buttom
 * @note if you want to set some loader, you need to pass to props loader to animate for example: a button
 * @returns a object with the values and the names of the inputs inside children
 * @example 
 * import Form, { Validations } from "components/form"
 * import Button from "components/button"
 * 
 * const validations: Validations = { name: 
 *  [
 *      { message: "This is required", validator: /^(?!\s*$).+/, type: "Error", onWriting: true }
 *  ]
 * }
 * 
 * const Example = () =>{
 *      return (
 *          <Form validations={validations} onSubmit={(data) =>console.log(data)}>
 *              <InputText required name="name" type="text" placeholder="Name" ></InputText>
 *              <Button type="submit" styleButton="blue" name="Submit" value="Submit"></Button>
 *          </Form>
 *      )
 * }
 * export default Example
 *  
 */
const Form:FC<HTMLNativeProps<"form",FormProps>> = ({ children, loader, onSubmit, validations, delay, stopFirstError = true, ...props }) =>{

    const [childrenWithProps, setChildrenWithProps] = useState<ReactElement<any, FunctionComponent>[]>([]);
    const formValues = useRef<FormValues>({error: { }, value: {}});
    const [ newValidation, setNewValidation ] = useState<boolean>(false);
    const [ newTimeOut, setNewTimeOut ] = useState<NodeJS.Timeout>();

    const validField = (name:string, value:string, submit: boolean) =>{
        if (!validations) return;
        if (!validations[name]) return;
        validations[name].forEach((CurrentError)=>{
            if (!CurrentError.onWriting && !submit) return;
            clearTimeout(newTimeOut!);
            setNewValidation(true);
            setNewTimeOut(setTimeout(() => {
                setNewValidation(false)
            }, delay || 1000));
            if (typeof CurrentError.validator === "function"){
                if (!CurrentError.validator(value)) return formValues.current.error[name] = CurrentError;
            }else{
                if (!CurrentError.validator.test(value)) return formValues.current.error[name] = CurrentError;
            }
            formValues.current.error[name] = undefined;
        });
    }

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
        let isError = false;
        for( const props in formValues.current.value){
            validField(props,formValues.current.value[props], true);
            if (formValues.current.error[props]) { isError = true; break};
        }
        if(isError) return;
        onSubmit(formValues.current.value);
    }

    const resolver: ChangeEventHandler<HTMLInputElement> = async (e) =>{
        formValues.current.value = {
            ...formValues.current.value,
            [e.target.name]: e.target.value,
        }
        validField(e.target.name, e.target.value, false);
    }

    useEffect(()=>{
        setChildrenWithProps(
            Children.map(children, child => {
                // Checking isValidElement is the safe way and avoids a typescript error too.
                if (!isValidElement(child)) return null;
                // Checking if the input type is form Salaxer's components and have a name 
                if (child.type.displayName !== "InputSalaxer" || !child.props.name) return null;
                // Only the submit button pass directly
                if (child.props.type === "submit") return child;
                // all others Input children will add a resolver to catch any change
                return (
                    <>{
                        cloneElement<HTMLNativeProps<"input",{ errorForm: string}>>(child, { onChange: resolver, errorForm: 
                            formValues.current.error[child.props.name] && formValues.current.error[child.props.name]?.message
                            }
                        )
                    }</>
                )
            })
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newValidation, loader])
    
    return (
        <form {...props} onSubmit={onSubmitForm} >
            {childrenWithProps}
        </form>
    )
}

export default Form


// Examples 

// const Table1 = <ObjectType extends { id: number }>({ id }: PropsWithChildren<ObjectType>) =>{
// }

// function Table<ObjectType extends { id: number }>({ id }: PropsWithChildren<ObjectType>) {
//     return (
//       <table>
//       </table>
//     );
//   }