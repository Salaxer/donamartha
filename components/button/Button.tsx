import styles from './Button.module.css';
import { Ripple } from '@Components'
import { LegacyRef, useRef } from 'react';
interface PropsButton{
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
    onClick: () => void,
}

const Button = ({className, value, styleButton = 'basic', size = 'md', iconR, iconL, onClick , ripple}:PropsButton) =>{
    return(
        <button type='button' onClick={() => onClick()} className={`${className} ${styles.button} ${styles[styleButton]} ${styles[size]}`}>
            {iconL && <i className={iconL}></i>}
            {value}
            {iconR && <i className={iconR}></i>}
            {ripple && <Ripple color={styleButton}/>}
        </button>
    )
}

export default Button;