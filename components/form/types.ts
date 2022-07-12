export type CustomObject = {
    [key: string]: any
}

export type FormValues = {
    value: CustomObject,
    error: FormError,
}

type FormError = {
    [key: string]: structureError | undefined;
}

/**
 * `key` must match with the name of the input to validate
 * @note You can add ilimitated 
 * @note you can sue ``` /^(?!\s*$).+/ => regex to validate emty fields ```
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
     * Funtion regex that used to validate the value of the input
     */
    regex: RegExp;
    /**
     * True If you want to validate the regex funtion while the user writing and false if 
     * only when the submit buttom click
     */
    onWriting: boolean;
}