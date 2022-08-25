import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import styles from './Loader.module.css';

interface PropsLoader{
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed',
    /**
     * accept px, rem, em, etc, you can chose your loader,
     *  `auto` automatic height and width
     */
    size?: string | "auto",
    background: CSSProperties['backgroundColor'];
    color?: CSSProperties['color'];
}

const Loader = ({background, color, position = "absolute", size = "auto"}:PropsLoader) =>{
	const refContainer = useRef<HTMLDivElement>(null);
	const [autoSize, setAutoSize] = useState<number>(0);
	useEffect(()=>{
		const minValue = Math.min(refContainer.current?.getBoundingClientRect().height!,  refContainer.current?.getBoundingClientRect().width!);
		setAutoSize(minValue - 15);
	},[])
	return (
		<div ref={refContainer} className={styles.containerLoad} id="preloader" style={{position, background: `${background ? background : 'rgba(255,255,255,.87)'}`}}>
			<div id="matSpinner" role="progressbar" className={styles.matProgressSpinner} style={{width: (size == "auto" ? autoSize : size), height: (size == "auto" ? autoSize : size)}}>
				<svg className={styles.svg} id="containCircle" preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true" viewBox="0 0 51.6 51.6" style={{width: `${size ? size : '56px'}`, height: `${size ? size : '56px'}`}}>
					<linearGradient style={{animation: 'girar 2000ms linear infinite'}} id="linearColors1" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#0096c1"></stop>
						<stop offset="100%" stopColor="#00984c"></stop>
					</linearGradient>
					<circle id="circle" cx="50%" cy="50%" r="23" className={styles.circle} style={{stroke: `${color ? color: 'url(#linearColors1)'}`}}></circle>
				</svg>
			</div>
		</div>
	)
}
export default Loader;