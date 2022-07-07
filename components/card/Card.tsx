import styles from './Card.module.css';
import { FC } from 'react'

type HeaderProps = string  | {
    align: "left" | "center" | "right",
    value: string,
}

type CardProps = {
    children: any,
    header?: HeaderProps,
    footer?: string,
    selectionable?: boolean,

}

const Card:FC<CardProps> = ({ header, footer, selectionable, children }) =>{
    return (
        <>
        { !selectionable ? 
        <section className={styles.container}>
            {header && <Header header={header}/>}
            {children}
            {footer && <footer>{footer}</footer>}
        </section> :
        <button className={styles.container}>
            {header && <Header header={header}/>}
            {children}
            {footer && <footer>{footer}</footer>}
        </button> }
        </>
    )
}

const Header:FC<{ header: HeaderProps}> = ({ header }) =>{
    return (
        <>
            { typeof header == "string" ? 
            <header className={`${styles.container__header} mb-5`}><h1>{header}</h1></header>:
            <header className={`${styles.container__header} mb-5 text-${header.align}`}><h1>{header.value}</h1></header>
            }
        </>
    )
}

export default Card;