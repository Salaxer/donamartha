import { FunctionComponent, ReactElement } from "react";

export type CustomObject = {
    [key: string]: any;
}

export type FormValues<T = CustomObject> = {
    value: T,
    error: FormError,
}

type FormError = {
    [key: string]: structureError | undefined;
}

/**
 * `key` must match with the name of the input to validate
 * @note you can use ``` /^(?!\s*$).+/``` => regex to validate emty fields 
 */
export type Validations = {
    [key: string]: structureError[]
}

type structureError = {
    /**
     * The message that will be displayed
     */
    message: string;
    /**
     * The type of error to inform to users
     */
    type: string;
    /**
     * `regex` that used to validate the value of the input;
     * `Callback` pass the current value of the input as string and the Funtion must return a boolean to validate the field
		 * must return true if there is an error 
     */
    validator: RegExp | ((value: string) => boolean);
    /**
     * True If you want to validate the regex funtion while the user writing and false if 
     * only when the submit buttom click
     */
    onWriting: boolean;
}

export interface FormProps {
    /**
     * @description Stop when find the first error and autofocus the input
     * @default true
     */
    stopFirstError?: boolean;
    /**
     * 
     */
    children: ReactElement<any, FunctionComponent>[],

    /**
     * to create a validation, the key object need to be named as the name of the input field
     */
    validations?: Validations;

    /**
     * 
     */
    onSubmit: (data: any) => void;

    /**
     * delay to set new validation
     */
    delay?: number;

    /**
     * 
     */
    loader?: boolean;
}