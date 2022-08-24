import styles from './Card.module.css';
import { Children, FC, ReactNode, isValidElement, useState, ReactElement, JSXElementConstructor, useEffect } from 'react'

type OptionsProps = {
	align: "start" | "center" | "end",
	value: string,
}

type CardProps = {
	children: ReactNode,
	header?: OptionsProps,
	footer?: OptionsProps,
	className?: string;
}

const Card:FC<CardProps> = ({ header, footer, children, className }) =>{

	const [reactHeader, setReactHeader] = useState<ReactElement<any, string | JSXElementConstructor<any>> | null>(null)
	const [reactFooter, setReactFooter] = useState<ReactElement<any, string | JSXElementConstructor<any>> | null>(null)
	const [newChild, setNewChild] = useState<ReactNode[] | null | undefined>(null)
	useEffect(()=>{
		setNewChild(
			Children.map(children, (child)=>{
				if (isValidElement(child)){
					if(typeof child.type !== "string"){
						if (child.type.name === "CardHeader") {
							setReactHeader(child)
							return null;
						}
						if (child.type.name === "CardFooter") {
							setReactFooter(child)
							return null;
						}
					}
					return child;
				}
				return null;
			})
		)
	},[children])

	return (
		<section className={`${styles.container} ${className && className}`}>
			<header className={styles.container__header}>
				{
					reactHeader ? reactHeader : 
					(
						header && <h1 style={{textAlign: header.align }}>{header.value}</h1>
					)
				}
			</header>
			<div className={styles.container__body}>
				{newChild}
			</div>
			<footer>
			{
				reactFooter ? reactFooter : (
					footer && <h3 style={{textAlign: footer.align }}>{footer.value}</h3>
				)
			}
			</footer>
		</section>
	)
}


export const CardHeader:FC<{ children: any}> = ( { children } ) =>{
	return (
		<>
			{children && children}
		</>
	)
}
CardHeader.displayName = "CardHeader";


export const CardFooter:FC<{ children: any}> = ( { children } ) =>{
	return (
		<>
			{children && children}
		</>
	)
}
CardFooter.displayName = "CardFooter";

export default Card;