import { useIsMobile } from "hooks/mediaQuery";
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
 * although you can use your personal components but those compoente don't sure to work. 
 * @throws not working for mobiles :(, when i set scrollTo() it didnt work
 */
const AutoScroll:React.FunctionComponent<AutoScrollProps> = ({autoScroll, className ,children, onChangeScreen}) =>{
    const elementChildrens = React.Children.toArray((children));
    const itemsRef = useRef([]) as MutableRefObject<HTMLDivElement[] | null[]>;
    const [currentScreen, setCurrentScreen] = useState(0);
    const nextTop = useRef(0);
    // temportar ultil i solve this error
    const isMobile = useIsMobile();

    useEffect(()=>{
        window.scroll({top: 0, left: 0, behavior: "smooth"});
        nextTop.current = 0;
        if (isMobile) {
            document.body.style.overflow = "overlay";
        }else{
            document.body.style.overflow = "hidden";
        }
        return ()=> {
            document.body.style.overflow = "overlay";
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
            
            // if (e.constructor.name == 'TouchEvent' ) {
            //     console.log(tsClientY.current, e.changedTouches[0].clientY);
            //     if (tsClientY.current > e.changedTouches[0].clientY) {
            //         stopListeners = true;
            //         nextTop.current = moveToElement(true, itemsRef, currentScreen, setCurrentScreen);
            //         console.log(nextTop.current);
            //     }else if (tsClientY.current < e.changedTouches[0].clientY){
            //         stopListeners = true;
            //         nextTop.current = moveToElement(false, itemsRef, currentScreen, setCurrentScreen);
            //         console.log(nextTop.current);
            //     }
            //     e.preventDefault();
            // }

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

        // window.addEventListener('touchstart', touchStart, { passive: false });
        // window.addEventListener('touchend', eventScroll, { passive: false });
        window.addEventListener('mousewheel', eventScroll, { passive: false });
        window.addEventListener('keydown', eventScroll, { passive: false });
        return () => {
            // window.removeEventListener('touchstart', touchStart, false);
            // window.removeEventListener('touchend', eventScroll, false);
            window.removeEventListener('mousewheel', eventScroll, false);
            window.removeEventListener('keydown', eventScroll, false);
        };
    }, [currentScreen, onChangeScreen]);

    return(
        <div className={styles.autoScroll} >
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