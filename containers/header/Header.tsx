import { useState, useEffect, useRef } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import 'primeicons/primeicons.css'
import { motion, useAnimation, Variants } from 'framer-motion';

import styles from './Header.module.css';
import { Ripple } from '@Components';
import { useIsMobile } from 'utils/hooks/mediaQuery';
import { useOnClickOutside } from 'utils/hooks/outsideClick';

const variants: Variants = {
    navInitial:{
        scale: 0.4,
        opacity: 0,
        y: 0,
        transition: {
            duration: 0.3,
        }
    },
    navHover: {
        scale: 1,
        opacity: 1,
        y: 50,
        transition: {
            duration: 0.8,
            type: 'spring',
            bounce: 0.5 ,
        }
    },
    navMobile:{
        scale: 1,
        opacity: 1,
        y: 0,
    },
    navNoMobile:{
        scale: 0.4,
        opacity: 0,
        y: 0,
        transition: {
            duration: 0.3,
        }
    },
}

const NavVariants: Variants = {
    initial:{
        left: '-75%'
    },
    open: {
        left: '-5%'
    },
    close:{
        left: '-75%'
    }
}
interface NavBar {
    id: number,
    icon: string,
    href: string,
    title: string
}
const navbar: NavBar[] = [
    {
        href: "/",
        icon: "pi pi-home",
        id: 0,
        title: "Inicio"
    },{
        href: "/menu",
        icon: "pi pi-table",
        id: 1,
        title: "Menu"
    },{
        href: "/delivery",
        icon: "pi pi-car",
        id: 3,
        title: "Pedidos"
    },{
        href: "/reservation",
        icon: "pi pi-bookmark-fill",
        id: 4,
        title: "Reservaciones"
    }
];

const Header: NextPage = () =>{
    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef<HTMLInputElement>(null);
    const [bar, setBar] = useState<boolean>(false);
    const isMobile = useIsMobile();
    const control = useAnimation();
    useOnClickOutside(ref, () => setBar(false));
    const router = useRouter();

    useEffect(()=>{
        isMobile ? control.set("navMobile") : control.set("navNoMobile");
    },[control, isMobile])


    const isRoute = (path: string): string =>{
        return router.pathname === path ? '0.3rem solid white' : 'none';
    }

    return (
        <>
        <header ref={ref} id="header" className={styles.header}>
            <Image className={styles.header__picture__img} src='/Blogo.png' alt="Logo del restaurante" height={50} width={155}/>
            <div className={styles.header__mobile} >
                {!bar ? <div onClick={()=>setBar(true)} className={styles.header__mobile__open}>
                    <i className='pi pi-align-justify'></i>
                </div>
                :
                <div onClick={()=>setBar(false)} className={styles.header__mobile__close}>
                    <i className='pi pi-times'></i>
                </div>}
            </div>
            <motion.nav className={styles.header__nav} variants={NavVariants} initial="initial" animate={bar?'open':'close'}>
                <ul onClick={()=>setBar(false)}>
                    {navbar.map((item, index)=>{
                        return (<motion.li
                        key={`navbar_item${index}`}
                        whileHover="navHover"
                        initial="navInitial"
                        animate={control}>
                            <Link href={item.href}>
                                <a aria-label={`enter para ir a ${item.title}`} style={{borderBottom: isRoute(item.href)}}>
                                    <i className={item.icon}></i>
                                    <motion.span variants={variants} className={styles.information}>{item.title}</motion.span>
                                    <Ripple color='blue'></Ripple>
                                </a>
                            </Link>
                        </motion.li>
                    )})}
                    <motion.li
                        whileHover="navHover"
                        initial="navInitial"
                        animate={control}>
                            <Link href="/signup">
                                <a aria-label={`enter para ir a iniciar sesion`} style={{borderBottom: isRoute('signup')}}>
                                    <i className="pi pi-sign-in"></i>
                                    <motion.span variants={variants} className={styles.information}>Unete</motion.span>
                                    <Ripple color='blue'></Ripple>
                                </a>
                            </Link>
                    </motion.li>
                    {/* {user === null ?
                    <li><Link href="/signup" aria-label="Unete a nosotros"><i className="fas fa-sign-in-alt"></i><span className="information">Unete</span></Link></li>:
                    user.photoURL === undefined ? <li> <LoaderCircle color="#0096C1" background="transparent" position="static" size="30"/> </li>:
                    <li><Link href="/profile" aria-label="Perfil de usuario"><Image src={user.photoURL} alt={`foto de ${user.displayName}`} /><span className="information">Perfil</span></Link></li>
                    } */}
                </ul>
            </motion.nav>
        </header>
        <div className={styles.falseHeader}>
            Aqui no hay nada
        </div>
    </>
    )
}
export default Header;
