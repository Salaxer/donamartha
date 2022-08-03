import { useEffect, useRef, useState } from 'react';
import styles from './Ripple.module.css';

interface PropsRipple{
    color: 'basic' | 'blue' | 'success' | 'clasic' | 'danger' | 'warning';
}

/**
 * 
 * @howToUse To use Ripple, the direct parent must have position relative
 * @borrows if Ripple breaks out of the parent's content, you can use "overflow: hidden" to fix it
 */
const Ripple = ({color}:PropsRipple) =>{

    const [radius, setRadius] = useState<number>(0); 
    const refContainer = useRef<HTMLSpanElement>(null);

    const createRipple = (e:any) =>{
        if (refContainer.current) {
            if (refContainer.current.childNodes.length>1) {
                refContainer.current.removeChild(refContainer.current.childNodes[0]);
            }
            var circle = document.createElement('span')
            circle.style.width = circle.style.height = `${radius*2}px`;
            circle.style.top = `${e.clientY - refContainer.current.getBoundingClientRect().top - radius}px`;
            circle.style.left = `${e.clientX - refContainer.current.getBoundingClientRect().left - radius}px`;
            // tanks to https://stackoverflow.com/a/58210855/9939795, i solved this error :)
            circle.classList.add(styles.ripple);
            circle.classList.add(styles[color]);
            refContainer.current.appendChild(circle);
        }
    }

    useEffect(()=>{
        if (refContainer.current) {
            const diameter = Math.max(refContainer.current.clientWidth, refContainer.current.clientHeight);
            setRadius(diameter / 2);
        }
    },[refContainer])

    return(
        <span className={styles.container} ref={refContainer} onClick={(e)=>createRipple(e)}>
        </span>
    )
}

export default Ripple;