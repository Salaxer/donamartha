import styles from './Card.module.css';
import { FC } from 'react'

type HeaderProps = string  | {
	align: "start" | "center" | "end",
	value: string,
}

type CardProps = {
	children: any | CardHeaderProps,
	header?: HeaderProps,
	footer?: string,
}

const Card:FC<CardProps> = ({ header, footer, children }) =>{
	return (
		<section className={styles.container}>
			{header && <CardHeader header={header}/>}
			<div className={styles.container__body}>
				{children}
			</div>
			{footer && <footer>{footer}</footer>}
		</section>
	)
}

type CardHeaderProps = {
	children: any;
	header?: undefined
} | {
	children?: never;
	header: HeaderProps
};

export const CardHeader:FC<CardHeaderProps> = ( { children, header } ) =>{
	return (
		<>
			{ typeof header == "string" ? 
			<header className={styles.container__header}><h1>{header}</h1></header>:
			header && <header className={styles.container__header} style={{textAlign: header.align}}><h1>{header.value}</h1></header>
			}
			{children && children}
		</>
	)
}

export default Card;