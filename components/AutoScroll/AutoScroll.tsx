import React, { MutableRefObject, ReactNode, useEffect, useRef } from "react";

import styles from './AutoScroll.module.css';

interface AutoScrollProps{
    autoScroll: boolean,
    className: string,
    children: ReactNode,
}

const moveToElement = (itemsRef: MutableRefObject<HTMLDivElement[] | null[]>, currentSection:number ,documentHeight: number) =>{
    const section = itemsRef.current.at(currentSection);
    const topSection = section?.getBoundingClientRect().height!*currentSection;
    window.scrollTo({behavior: "smooth", left: 0, top: topSection});
    return topSection;
}

const automaticScroll = (itemsRef: MutableRefObject<HTMLDivElement[] | null[]>) =>{
    let lastScroll = window.scrollY;
    let stopListen = false;
    let currentSection = 0

    const documentHeight = document.body.offsetHeight;
    
    const onScroll = () => {
        const scrollY = window.scrollY;
        if(stopListen) return;
        // check if the position change
        if (scrollY !== lastScroll) {
            stopListen = true;
            const dirDown = scrollY > lastScroll;
            let newSroll: number = 0;
            if (dirDown) {
                if (currentSection !== itemsRef.current.length - 1) {
                    currentSection = currentSection + 1;
                    newSroll = moveToElement(itemsRef, currentSection, documentHeight)
                }
            }else{
                if (currentSection !== 0) {
                    currentSection = currentSection - 1;
                    newSroll = moveToElement(itemsRef, currentSection, documentHeight)
                }
            }
            lastScroll = (newSroll > 0 ? newSroll : 0);

            // console.log('end -------------------------------------- end');

            setTimeout(() => {
                stopListen = false;
            }, 500);

        }
    }
    return onScroll;
}


// 
const AutoScroll:React.FunctionComponent<AutoScrollProps> = ({autoScroll, className ,children}) =>{
    const elementChildrens = React.Children.toArray((children));
    const itemsRef = useRef([]) as MutableRefObject<HTMLDivElement[] | null[]>;

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, elementChildrens.length);
    }, [elementChildrens]);
    
    useEffect(() => {
        // it supossed run only once;
        if (autoScroll) {
            window.addEventListener("scroll", automaticScroll(itemsRef));
            return () => window.removeEventListener("scroll", automaticScroll(itemsRef), { capture: true});
        }
    }, [autoScroll]);
    
    return(
        <div className={styles.autoScroll}>
            {elementChildrens.map((element, index) =>{
                return(
                    <div ref={el => itemsRef.current[index] = el} className={className}  key={index} id={`screen ${index}`}>
                        {element}
                    </div>
                )
            })}
        </div>
    )
}

export default AutoScroll;