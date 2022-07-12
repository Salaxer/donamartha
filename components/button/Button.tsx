import styles from './Button.module.css';
import { Ripple } from '@Components'
import { forwardRef, LegacyRef } from 'react';

import { ButtomElement } from '../native/types'

interface PropsButton extends ButtomElement {
    /**
     * value in the middle of the button
     */
    value: string,
    styleButton?: 'basic' | 'blue' | 'success' | 'clasic' | 'danger' | 'warning',
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    iconR?: string,
    iconL?: string,
    ripple?: boolean,
    type?: "submit";
    name?: string;
}

const Button = forwardRef(({  value, iconL, iconR, className, size = "md", ripple, styleButton = "basic", ...props }: PropsButton, ref: LegacyRef<HTMLButtonElement>) =>{
    return(
        <button {...props} ref={ref} className={`${className} ${styles.button} ${styles[styleButton]} ${styles[size]}`}>
            {iconL && <i className={iconL}></i>}
            {value}
            {iconR && <i className={iconR}></i>}
            {ripple && <Ripple color={styleButton}/>}
        </button>
    )
});
Button.displayName = "InputSalaxer";

export default Button;