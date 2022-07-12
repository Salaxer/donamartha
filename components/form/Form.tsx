import { FC, ReactElement, FunctionComponent,
    cloneElement, useEffect, useState,
    Children, isValidElement, FormEventHandler, ChangeEventHandler, useRef } from "react";
import { HTMLNativeProps } from '../native/types'
import { CustomObject, FormValues, Validations } from "./types";


interface FormProps{
    children: ReactElement<any, FunctionComponent>[],
    onSubmit: (data: CustomObject) => void;
    /**
     * to create a validation, the key object need to be named as the name of the input field
     */
    validations?: Validations;
    /**
     * delay to set new validation
     */
    delay?: number;
}

/**
 * 
 * @note all children must be salaxer's input components and other children will be ignored
 * @note all children must have name and type props
 * @note must be a submit buttom
 * @returns a object with the values and the names of the inputs inside children
 * @example 
 * import Form, { Validations } from "components/form"
 * import Button from "components/button"
 * 
 * const validations: Validations = { name: 
 *  [
 *      { message: "This is required", regex: /^(?!\s*$).+/, type: "Error", onWriting: true }
 *  ]
 * }
 * 
 * const Example = () =>{
 *      return (
 *          <Form validations={validations} onSubmit={(data) =>console.log(data)}>
 *              <InputText required name="name" type="text" placeholder="Name" ></InputText>
 *              <Button type="submit" styleButton="blue" name="AMAMA" value="Send"></Button>
 *          </Form>
 *      )
 * }
 * export default Example
 *  
 */
const Form:FC<HTMLNativeProps<"form",FormProps>> = ({ children, onSubmit, validations, delay, ...props }) =>{

    const [childrenWithProps, setChildrenWithProps] = useState<ReactElement<any, FunctionComponent>[]>([]);
    const formValues = useRef<FormValues>({error: { }, value: {}});
    const [ newValidation, setNewValidation ] = useState<boolean>(false);
    const [ newTimeOut, setNewTimeOut ] = useState<NodeJS.Timeout>();

    const validField = (name:string, value:string, submit: boolean) =>{
        if (!validations) return;
        if (!validations[name]) return;
        validations[name].forEach((CE)=>{
            if (!CE.onWriting && !submit) return;
            clearTimeout(newTimeOut!);
            setNewValidation(true);
            if (!CE.regex.test(value)){
                formValues.current.error[name] = CE;
            }else{
                formValues.current.error[name] = undefined;
            }
            setNewTimeOut(setTimeout(() => {
                setNewValidation(false)
            }, delay || 1000))
        });
    }

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
        let isError = false;
        for( const props in formValues.current.value){
            validField(props,formValues.current.value[props], true);
            if (formValues.current.error[props]) return isError = true;
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
                if (child.type.displayName !== "InputSalaxer" || !child.props.name) return null;
                if (child.props.type === "submit") return child;
                return (
                    <>
                        {cloneElement<HTMLNativeProps<"input",FormProps>>(child, { onChange: resolver })}
                        {formValues.current.error[child.props.name] &&
                        <span className="text-sm m-0 p-0 text-red-600">{`${formValues.current.error[child.props.name]?.type}: ${formValues.current.error[child.props.name]?.message}`}</span>}
                    </>
                )
            })
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[newValidation])
    
    return (
        <form {...props} onSubmit={onSubmitForm} >
            {childrenWithProps}
        </form>
    )
}

export default Form