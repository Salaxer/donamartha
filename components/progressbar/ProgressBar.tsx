import { motion, useAnimation, Variants } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import styles from './ProgressBar.module.css';

const animationsV: Variants = {
	initial: {
		width: 0,
		opacity: 0,
	},
	finally: {
		width: "110%",
		opacity: 0,
		transition: {
			duration: 0.2,
			type: "tween"
		}
	}
}

interface ProgressBarType {
	automatic?: boolean,
	animate: boolean;
	options: {
		readonly asd: string
	}
}

const ProgressBar: FC<ProgressBarType> = ({ automatic, animate }) =>{
	const refInteval = useRef<NodeJS.Timer | null>(null);
	const [ display, setDisplay ] = useState(false);
	const controlAnimation = useAnimation();

	useEffect(()=>{
		const stopAnimation = () =>{
			if (refInteval.current){
				clearInterval(refInteval.current);
				controlAnimation.start("finally");
				setTimeout(()=>{
					setDisplay(false);
				}, 250)
			}
		}
		setDisplay(true);
		if (!animate) return stopAnimation();

		controlAnimation.start("initial");
		let multiply = 30;
		let currentWidth = 0;
		refInteval.current = setInterval(()=>{
			console.log(currentWidth);
			if (currentWidth >= 100) {
				stopAnimation();
				return 0;
			}
			const nWidth = currentWidth + Math.random()*multiply;
			controlAnimation.start({
				width: `${nWidth}%`,
				opacity: 1,
				transition: {
					duration: 0.2,
				}
			})
			multiply = nWidth <= 50 ? 15 : (nWidth >= 90 ? 0.5 : 2);
			currentWidth = nWidth;
		}, 200)
		
		return ()=>{
			stopAnimation()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[animate])
	return (
		<section className={styles.container}>
			{ display && <motion.span variants={animationsV} 
			animate={controlAnimation} className={styles.progressbar}>
			</motion.span>}
		</section>
	)
}

export default ProgressBar;