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
	MenuIcon,
	XIcon,
} from "@heroicons/react/solid";
import { LoginIcon } from "@heroicons/react/outline";

import { motion, useAnimation, Variants } from "framer-motion";

import styles from "./Header.module.css";
import { Ripple } from "@Components";
import { useIsMobile } from "utils/hooks/mediaQuery";
import { useOnClickOutside } from "utils/hooks/outsideClick";

const variants: Variants = {
	navInitial: {
		scale: 0.7,
		opacity: 0,
		y: 40,
		transition: {
			duration: 0.3,
		},
	},
	navHover: {
		scale: 1,
		opacity: 1,
		y: 50,
		transition: {
			delay: 0.4,
			duration: 0.8,
			type: "spring",
			bounce: 0.5,
		},
	},
	navMobile: {
		scale: 1,
		opacity: 1,
		y: 0,
	},
};

const NavVariants: Variants = {
	initial: {
		left: "-75%",
	},
	open: {
		left: "-5%",
	},
	close: {
		left: "-75%",
	},
};
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
	{
		href: "/reservation",
		icon: <BookmarkIcon width="25px" />,
		id: 4,
		title: "Reservaciones",
	},
];

const Header: NextPage = () => {
	// Create a ref that we add to the element for which we want to detect outside clicks
	const ref = useRef<HTMLInputElement>(null);
	const [bar, setBar] = useState<boolean>(false);
	const isMobile = useIsMobile();
	const control = useAnimation();
	useOnClickOutside(ref, () => setBar(false));
	const router = useRouter();

	useEffect(() => {
		isMobile ? control.set("navMobile") : control.set("navInitial");
	}, [control, isMobile]);

	const isRoute = (path: string): string => {
		return router.pathname === path ? styles.focusPage : "";
	};

	return (
		<>
			<header ref={ref} id="header" className={styles.header}>
				<Image
			 		className={styles.header__picture__img} src="/Blogo.png" alt="Logo del restaurante" height={50} width={155}
				/>
				<div className={styles.header__mobile}>
					{!bar ? (
						<div
							onClick={() => setBar(true)}
							className={styles.header__mobile__open}
						>
							<MenuIcon width="30px" />
						</div>
					) : (
						<div
							onClick={() => setBar(false)}
							className={styles.header__mobile__close}
						>
							<XIcon width="30px" />
						</div>
					)}
				</div>
				<motion.nav
					className={styles.header__nav}
					variants={NavVariants}
					initial="initial"
					animate={bar ? "open" : "close"}
				>
					<ul onClick={() => setBar(false)}>
						{navbar.map((item, index) => {
							return (
								<motion.li
									key={`navbar_item${index}`}
									whileHover={isMobile ? "" : "navHover"}
									initial="navInitial"
									animate={control}
									className={`${isRoute(item.href)}`}
								>
									<Link href={item.href}>
										<a
											aria-label={`enter para ir a ${item.title}`}
										>
											{item.icon}
											<motion.span variants={variants} className={styles.information}>
												{item.title}
											</motion.span>
											<Ripple color="blue"></Ripple>
										</a>
									</Link>
								</motion.li>
							);
						})}
						<motion.li
							initial="navInitial"
							whileHover={isMobile ? "" : "navHover"}
							animate={control}
							className={`${isRoute("/signup")}`}
						>
							<Link href="/signup" >
								<a
									aria-label={`enter para ir a iniciar sesion`}
								>
									<LoginIcon width="25px" />
									<motion.span
										variants={variants}
										className={styles.information}
									>
										Unete
									</motion.span>
									<Ripple color="blue"></Ripple>
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
			<div className={styles.falseHeader}>Aqui no hay nada</div>
		</>
	);
};
export default Header;
