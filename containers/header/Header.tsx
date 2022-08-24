import { useState, useEffect, useRef, ReactElement } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	HomeIcon,
	TemplateIcon,
	BookmarkIcon,
	TruckIcon,
	UserIcon
} from "@heroicons/react/solid";
import { LoginIcon } from "@heroicons/react/outline";

import { motion, Variants } from "framer-motion";

import styles from "./Header.module.css";
import { Ripple } from "@Components";
import { useIsMobile } from "utils/hooks/mediaQuery";
import { useAppSelector } from "state/hooks/hooks";


const focusLinkVariant: Variants = {
	focus: {
		width: "70%",
		opacity: 1,
		display: "block"
	},
	noFocus: {
		opacity: 0,
		width: "0%",
		display: "none"
	}
}

interface NavBar {
	id: number;
	icon: ReactElement<any, any>;
	href: string;
	title: string;
}
const navbar: NavBar[] = [
	{
		href: "/",
		icon: <HomeIcon width="25px" />,
		id: 0,
		title: "Inicio",
	},
	{
		href: "/menu",
		icon: <TemplateIcon width="25px" />,
		id: 1,
		title: "Menu",
	},
	{
		href: "/delivery",
		icon: <TruckIcon width="25px" />,
		id: 3,
		title: "Pedidos",
	},
	// {
	// 	href: "/reservation",
	// 	icon: <BookmarkIcon width="25px" />,
	// 	id: 4,
	// 	title: "Reservaciones",
	// },
];

const Header: NextPage = () => {

	const isMobile = useIsMobile();
	const router = useRouter();
	const user = useAppSelector((state)=> state.user)

	const isRoute = (path: string) =>  router.pathname === path ? styles.focusPage : "";
	const isFocus = (path: string) =>  router.pathname === path ? "focus" : "noFocus";

	return (
		<>
			<header id="header" className={styles.header}>
				<Image className={styles.header__img} src="/Blogo.png" alt="Logo del restaurante" height={50} width={155}/>
				<nav className={styles.header__nav}>
					<ul>
						{
							navbar.map((item, index) => (
								<motion.li key={`navbar_item${index}`} whileHover={isMobile ? "" : "navHover"}>
									<Link href={item.href}>
										<a aria-disabled={(isRoute(item.href).length > 0)} aria-label={`enter para ir a ${item.title}`} className={`${isRoute(item.href)}`}>
											{item.icon}
											<motion.span initial="noFocus" animate={isFocus(item.href)} variants={focusLinkVariant} className={styles.information}>
												{item.title}
											</motion.span>
											<Ripple color="blue"></Ripple>
										</a>
									</Link>
								</motion.li>
							))
						}
						{
							user === null ?
							<motion.li whileHover={isMobile ? "" : "navHover"}>
								<Link href="/signin" >
									<a aria-disabled={(isRoute("/signin").length > 0)} aria-label={`enter para ir a iniciar sesion`} className={`${isRoute("/signin")}`}>
										<LoginIcon width="25px" />
										<motion.span initial="noFocus" animate={isFocus("/signin")} variants={focusLinkVariant} className={styles.information}>
											Acceder
										</motion.span>
										<Ripple color="blue"></Ripple>
									</a>
								</Link>
							</motion.li>
							: 
							<motion.li whileHover={isMobile ? "" : "navHover"}>
								<Link href="/profile" >
									<a aria-disabled={(isRoute("/profile").length > 0)} aria-label={`enter para ir a iniciar sesion`} 
									className={`${isRoute("/profile")}`}>
										<UserIcon width="25px" />
										<motion.span initial="noFocus" animate={isFocus("/profile")} variants={focusLinkVariant} className={styles.information}>
											Perfil
										</motion.span>
										<Ripple color="blue"></Ripple>
									</a>
								</Link>
							</motion.li>
						}
					</ul>
				</nav>
			</header>
			<div className={styles.falseHeader}>Aqui no hay nada</div>
		</>
	);
};
export default Header;
