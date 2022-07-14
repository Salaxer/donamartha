import { motion, Variants } from 'framer-motion';
import { useState, forwardRef, LegacyRef } from 'react';

import styles from './InputText.module.css';
import { PropsInput } from './types';
import { getShadow } from './styles';

const varLabel: Variants = {
    normal: {
        x: 0,
    },
    focus: {
        x: 0,
    },
    error:{
        x: [0, 10, -10, 5, -5, 0],
    }
}
const varSpanError: Variants = {
    normal: {
        y: -10,
        scale: 0.8,
        opacity: 0,
    },
    error:{
        y: 0,
        scale: 1,
        opacity: 1,
    }
}
const varSpanName: Variants = {
    center: {
        y: 0,
        scale: 1,
    },
    up:{
        y: "-2.3rem",
        scale: 0.8,
    }
}

const InputText = forwardRef(({errorForm, displayName, border = "normal", placeholder, colorStyles, ...props}: PropsInput, ref:LegacyRef<HTMLInputElement>) =>{
    
    const { errorShadow, focusShadow, normalShadow} = getShadow(colorStyles);
	const [ upName, setUpName ] = useState<boolean>(false);

	const handleName = (e:any) =>{
		if (e.type == "focus") return setUpName(true);
		if (e.type == "blur" && e.target.value.length === 0)return setUpName(false);
		if (e.type == "change" && e.target.value.length > 0)return setUpName(true);
    }
    

	return( 
		<motion.label
			transition={{duration: 0.4}}
			animate={ errorForm ? "error" : ( upName ? "focus" :"normal")}
			variants={varLabel}
			onChange={handleName}
			onFocus={handleName}
			onBlur={handleName}
            style={{
                boxShadow: errorForm ? errorShadow : ( upName ? focusShadow : normalShadow )
            }}
			className={`${styles.container} border-${border}`}>
			<motion.span animate={upName ? "up" : "center"}
				style={{boxShadow: upName ? (errorForm ? "rgba(255, 73, 73, 0.6) 0px 0px 0.25em, inset rgba(102, 38, 38, 0.02) 0px 0.25em 1em" : "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, inset rgba(90, 125, 188, 0.05) 0px 0.25em 1em") : "none" , backgroundColor: upName ? "white" : "none"}}
				variants={varSpanName}
				className={styles.container__name}>{displayName}</motion.span>
			<motion.span animate={errorForm? "error" :"normal"}
				transition={{delay: 0.4 ,duration: 0.3}}
				variants={varSpanError} className={styles.container__error}>{errorForm}</motion.span>
			<input {...props} ref={ref} placeholder={upName ? placeholder : "" }
				className={`${styles.container__input} border-${border}`}/>
		</motion.label>
	)
});
InputText.displayName = "InputSalaxer";

export default InputText;