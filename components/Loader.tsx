import React from 'react';
import styles from '../styles/components/Loader.module.css';

interface PropsLoader{
    color: string,
    position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed',
    size: string,
    background: string
}

const Loader = ({background, color, position, size}:PropsLoader) =>{
    return (
        <div className={styles.containerLoad} id="preloader" style={{position: `${position ? position : 'absolute' }`, background: `${background ? background : 'rgba(255,255,255,.87)'}`}}>
            <div id="matSpinner" role="progressbar" className={styles.matProgressSpinner} 
            style={{width: `${size ? size : '56px'}`, height: `${size ? size : '56px'}`}}
            >
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