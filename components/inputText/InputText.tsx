import { motion, Variants } from "framer-motion";
import { useState, forwardRef, LegacyRef, useEffect } from "react";

import styles from "./InputText.module.css";
import { Colors, PropsInput } from "./types";
import { getColor } from "./styles";

const varLabel: Variants = {
	normal: {
		x: 0,
	},
	focus: {
		x: 0,
	},
	error: {
		x: [0, 10, -10, 5, -5, 0],
	},
};
const varSpanError: Variants = {
	normal: {
		y: -10,
		scale: 0.8,
		opacity: 0,
	},
	error: {
		y: 0,
		scale: 1,
		opacity: 1,
	},
};
const varSpanName: Variants = {
	center: {
		y: 0,
		scale: 1,
	},
	up: {
		y: "-2.3rem",
		scale: 0.8,
	},
};

const defaultColors: Colors = {
	errorColor: {
		border: "var(--danger-color-300)",
		shadow: "#f7150455",
	},
	focusColor: {
		border: "var(--maincolorblue-300)",
		shadow: "#2d94b155",
	},
	normalColor: {
		border: "var(--background-w-300)",
		shadow: "#d8d9da55",
	},
};
/**
 * InputText recomendable for inputs like text, email and number
 */
const InputText = forwardRef(
	(
		{
			errorForm,
			displayName,
			border = "normal",
			placeholder,
			colorStyles,
			...props
		}: PropsInput,
		ref: LegacyRef<HTMLInputElement>
	) => {
	const [{ errorColor, focusColor, normalColor }, setColor] = useState<Colors>(defaultColors);
	useEffect(() => {
		if (colorStyles) {
			setColor({
				...defaultColors,
				...getColor(colorStyles),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [upName, setUpName] = useState<boolean>(false);

	const handleName = (e: any) => {
		if (e.type == "focus") return setUpName(true);
		if (e.type == "blur" && e.target.value.length === 0)
			return setUpName(false);
		if (e.type == "change" && e.target.value.length > 0)
			return setUpName(true);
	};

	return (
		<motion.label
			transition={{ duration: 0.4 }}
			animate={errorForm ? "error" : upName ? "focus" : "normal"}
			variants={varLabel}
			onChange={handleName}
			onFocus={handleName}
			onBlur={handleName}
			style={{
				border: `1px solid ${
					errorForm
						? errorColor.border
						: upName
						? focusColor.border
						: normalColor.border
				}`,
				boxShadow: `${
					errorForm
						? errorColor.shadow
						: upName
						? focusColor.shadow
						: normalColor.shadow
				} 0px 0px 3px 3px`,
			}}
			className={`${styles.container} border-${border}`}
		>
			<motion.span
				animate={upName ? "up" : "center"}
				style={{
					border: upName
						? `1px solid ${errorForm ? errorColor.border : focusColor.border}`
						: "none",
					boxShadow: upName
						? `${
								errorForm ? errorColor.shadow : focusColor.shadow
							} 0px 0px 2px 1px`
						: "none",
					backgroundColor: upName ? "white" : "none",
				}}
				variants={varSpanName}
				className={`${styles.container__name}`}
			>
				{displayName}
			</motion.span>
			<motion.span
				animate={errorForm ? "error" : "normal"}
				transition={{ delay: 0.4, duration: 0.3 }}
				variants={varSpanError}
				className={styles.container__error}
				style={{ color: errorColor.border }}
			>
				{errorForm}
			</motion.span>
			<input
				{...props}
				ref={ref}
				placeholder={upName ? placeholder : ""}
				className={`${styles.container__input} border-${border}`}
			/>
		</motion.label>
	);
	}
);
InputText.displayName = "InputSalaxer";

export default InputText;