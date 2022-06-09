import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

import styles from './AutoScroll.module.css';

import { moveToElement } from './moveToElement';

interface AutoScrollProps{
    /**
     * You can activate or desactivate the animation of the scroll
     */
    autoScroll: boolean,
    /**
     * your personal styles
     */
    className: string,
    /**
     * AllScreen is recomendable to use
     */
    children: ReactNode,
    /**
     * return the index of the current visible screen
     */
    onChangeScreen: (e: number) => void,
}

/**
 * AutoScroll: here you can show diferents screens in all viewport to animate when the user scroll
 * @children AllScreen, with this component you can be sure the component AutoScroll will work
 * although you can use your personal components. 
 */
const AutoScroll:React.FunctionComponent<AutoScrollProps> = ({autoScroll, className ,children, onChangeScreen}) =>{
    const elementChildrens = React.Children.toArray((children));
    const itemsRef = useRef([]) as MutableRefObject<HTMLDivElement[] | null[]>;

    const [currentScreen, setCurrentScreen] = useState(0);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, elementChildrens.length);
    }, [elementChildrens]);
    
    useEffect(() => {
        
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
                setCurrentScreen(currentSection);
                lastScroll = (newSroll > 0 ? newSroll : 0);
                setTimeout(() => {
                    stopListen = false;
                }, 500);
            }
        } 

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(()=>{
        onChangeScreen(currentScreen);
    },[currentScreen, onChangeScreen])
    
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