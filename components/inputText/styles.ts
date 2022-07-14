import { ColorStyles, ShadowStyle } from "./types"

export const getShadow = (
    { 
        normalColor = "rgba(67, 71, 85, 0.6)",
        errorColor= "rgba(255, 73, 73, 0.6)",
        focusColor = "rgba(9, 53, 205, 0.6)"
    }: ColorStyles = {}):ShadowStyle  =>{
    return { 
        normalShadow: `${normalColor} 0px 0px 0.2em, inset ${normalColor} 0px 0px 0.2em`,
        errorShadow: `${errorColor} 0px 0px 0.25em, inset ${errorColor} 0px 0px 0.2em`,
        focusShadow: `${focusColor} 0px 0px 0.25em, inset ${focusColor} 0px 0px 0.2em`,
    }
}