import { ColorStyles, Colors } from "./types"

export const getColor = ({ error, focus, normal }: ColorStyles):Partial<Colors>  =>{
    
    const verify = (nameInput: string, value?: string) =>{
        return value ? {
            [nameInput]: {
                shadow: value,
                border: value
            }
        } : {};
    }
    return {
        ...verify("errorColor", error),
        ...verify("normalColor", normal),
        ...verify("focusColor", focus),
    }
}