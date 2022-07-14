import { HTMLInputTypeAttribute } from 'react';
import { HTMLNativeProps } from '../native/types'

export type ColorStyles = {
    errorColor?: string,
    normalColor?: string,
    focusColor?: string,
}

export type ShadowStyle = {
    errorShadow: string,
    normalShadow: string,
    focusShadow: string,
}

export interface PropsInput extends Exclude<HTMLNativeProps<'input', {}>, 'onAnimationStart'>{
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