import styles from './Button.module.css';
import { Loader, Ripple } from '@Components'
import { forwardRef, LegacyRef, ReactElement } from 'react';

import { ButtomElement } from '../native/types'

interface PropsButton extends ButtomElement {
    /**
     * value in the middle of the button
     */
    value: string,
    loader?: boolean;
    styleButton?: 'basic' | 'blue' | 'success' | 'clasic' | 'danger' | 'warning',
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    iconR?: ReactElement<any, any>,
    iconL?: ReactElement<any, any>,
    ripple?: boolean,
    type?: "submit" | "button";
    name?: string;
}

const Button = forwardRef(({  value, iconL, iconR, className, size = "md", ripple, styleButton = "basic", loader= false, ...props }: PropsButton, ref: LegacyRef<HTMLButtonElement>) =>{
    return(
        <button {...props} ref={ref} disabled={loader} className={`${styles.button} ${styles[styleButton]} ${styles[size]} ${className && className}`}>
            {loader && <Loader background='inherit' position='absolute'></Loader>}
            {iconL && <span style={{width: "20px"}}>{iconL}</span>}
            {value}
            {iconR && <span style={{width: "20px"}}>{iconR}</span>}
            {ripple && <Ripple color={styleButton}/>}
        </button>
    )
});
Button.displayName = "InputSalaxer";

export default Button;