import { CSSProperties, HTMLInputTypeAttribute } from 'react';
import { HTMLNativeProps } from '../native/types'

export type ColorStyles = {
    error?: CSSProperties["color"],
    normal?: CSSProperties["color"],
    focus?: CSSProperties["color"],
}

export interface shadowAndBorder {
    border: string,
    shadow: string
}

export type Colors = {
    errorColor: shadowAndBorder,
    normalColor: shadowAndBorder,
    focusColor: shadowAndBorder, 
}

export type ShadowStyle = {
    errorShadow: string,
    normalShadow: string,
    focusShadow: string,
}

export interface PropsInput extends HTMLNativeProps<'input', {}>{
    type: HTMLInputTypeAttribute;
    name: string;
    /**
     * the state of error turn all input on error
     */
    errorForm?: string;
    /**
     * `displayName` to show the users the name of the field
     */
    displayName: string;
    /**
     * `border` the style of the border
     */
    border?: "full" | "normal" | "none";
    /**
     * 
     */
    colorStyles?: ColorStyles;
};