import styles from './Button.module.css';
import { Ripple } from '@Components'
import { CSSProperties } from 'react';
interface PropsButton{
    /**
     * value in the middle of the button
     */
    value: string,
    styleButton?: 'basic' | 'blue' | 'success' | 'clasic' | 'danger' | 'warning',
    className?: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    style?: CSSProperties;
    iconR?: string,
    iconL?: string,
    ripple?: boolean,
    onClick: () => void,
}

const Button = ({className, value, styleButton = 'basic', size = 'md', iconR, iconL, onClick , ripple, style}:PropsButton) =>{
    return(
        <button style={style} type='button' onClick={() => onClick()} className={`${className} ${styles.button} ${styles[styleButton]} ${styles[size]}`}>
            {iconL && <i className={iconL}></i>}
            {value}
            {iconR && <i className={iconR}></i>}
            {ripple && <Ripple color={styleButton}/>}
        </button>
    )
}

export default Button;