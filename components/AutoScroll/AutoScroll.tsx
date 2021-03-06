import { useIsMobile } from "utils/hooks/mediaQuery";
import React, { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from './AutoScroll.module.css';
import { moveToElement } from './moveToElement';

interface AutoScrollProps{
    /**
     * You can activate or desactivate the animation of the scroll, right now it doesn't work
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
 * although you can use your personal components but those compoente don't sure to work. 
 * @note No supported for touch screen, or mobile screens
 */
const AutoScroll:React.FunctionComponent<AutoScrollProps> = ({autoScroll, className ,children, onChangeScreen}) =>{
    const elementChildrens = React.Children.toArray((children));
    const itemsRef = useRef([]) as MutableRefObject<HTMLDivElement[] | null[]>;
    const [currentScreen, setCurrentScreen] = useState(0);
    const nextTop = useRef(0);
    const isMobile = useIsMobile();
    
    // temportar until i solve this error
    useEffect(()=>{
        window.scroll({top: 0, left: 0, behavior: "smooth"});
        nextTop.current = 0;
        document.body.style.overflow = "overlay";
        if (!isMobile) {
            document.body.style.overflow = "hidden";
        }
        return ()=> {
            document.body.style.overflow = "overlay";
            if ( document.body.style.overflow == "hidden") { // suport for Firefox and others
                document.body.style.overflow = "auto";
            }
        };
    },[isMobile])

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, elementChildrens.length);
    }, [elementChildrens]);
    

    useEffect(() => {
        onChangeScreen(currentScreen);
        let stopListeners: boolean = true;

        const eventScroll = (e:any) =>{         

            if (nextTop.current === window.scrollY) {
                stopListeners = false;
            }
            if (stopListeners) {
                e.preventDefault();
                return;
            }
            if (e.constructor.name == 'WheelEvent' ) {
                e.preventDefault();
                if (e.deltaY > 0) {
                    stopListeners = true;
                    nextTop.current = moveToElement(true, itemsRef, currentScreen, setCurrentScreen);
                }else{
                    stopListeners = true;
                    nextTop.current = moveToElement(false, itemsRef, currentScreen, setCurrentScreen);
                }
            }
            if (e.constructor.name === "KeyboardEvent" ) {
                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    stopListeners = true;
                    nextTop.current = moveToElement(true, itemsRef, currentScreen, setCurrentScreen);
                }
                if(e.key === "ArrowUp"){
                    e.preventDefault();
                    stopListeners = true;
                    nextTop.current = moveToElement(false, itemsRef, currentScreen, setCurrentScreen);
                }
            }
        }

        window.addEventListener('mousewheel', eventScroll, { passive: false });
        window.addEventListener('wheel', eventScroll, { passive: false }); //support for Firefox
        window.addEventListener('keydown', eventScroll, { passive: false });
        return () => {
            // remove all event listen when the component is removed
            window.removeEventListener('mousewheel', eventScroll, false);
            window.removeEventListener('wheel', eventScroll, false);
            window.removeEventListener('keydown', eventScroll, false);
        };
    }, [currentScreen, onChangeScreen]);

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