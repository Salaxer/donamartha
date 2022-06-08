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
    icon?: string,
    ripple?: boolean,
    onClick: () => void,
}

const Button = ({className, value, styleButton = 'basic', size = 'md', icon, onClick , ripple}:PropsButton) =>{
    return(
        <button onClick={() => onClick()} className={`${className} ${styles.button} ${styles[styleButton]} ${styles[size]}`}>
            {icon && <i className={icon}></i>}
            {value}
            {ripple && <Ripple color={styleButton}/>}
        </button>
    )
}

export default Button;