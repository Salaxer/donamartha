import { forwardRef, LegacyRef } from 'react';

import { HTMLNativeProps } from '../native/types'
import styles from './InputText.module.css';

interface PropsInput extends HTMLNativeProps<'input', {}>{

};

const InputText = forwardRef((props: PropsInput, ref:LegacyRef<HTMLInputElement>) =>{
    const { className } = props;
    return(
        <input {...props} ref={ref} className={`${styles.input} ${className}`}/>
    )
});
InputText.displayName = "InputSalaxer";

export default InputText;