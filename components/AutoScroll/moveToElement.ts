import { Dispatch, MutableRefObject, SetStateAction } from "react";

/**
 * 
 * @param dirDown true or false to set direction to move the scroll (true = down)
 * @param itemsRef all children to move scroll
 * @param currentScreen current view children
 * @param setScreen useState for set currentScreen
 * @return screenY of the next Screen.
 */
export const moveToElement = (dirDown: boolean, itemsRef: MutableRefObject<HTMLDivElement[] | null[]>, currentScreen:number, setScreen: Dispatch<SetStateAction<number>>):number =>{
    let nextScreen:number = 0;
    if (dirDown) {
        if (currentScreen !== itemsRef.current.length - 1) {
            currentScreen = currentScreen + 1;
            nextScreen = move(itemsRef, currentScreen);
            setScreen(currentScreen);
        }else if(currentScreen === itemsRef.current.length - 1){
            nextScreen = itemsRef.current.at(currentScreen)?.getBoundingClientRect().height!*currentScreen;
        }
    }else{
        if (currentScreen !== 0) {
            currentScreen = currentScreen - 1;
            nextScreen = move(itemsRef, currentScreen)
            setScreen(currentScreen);
        }
    }
    return nextScreen;
}
const move = (itemsRef: MutableRefObject<HTMLDivElement[] | null[]>, currentScreen:number):number =>{
    const section = itemsRef.current.at(currentScreen);
    const topSection = section?.getBoundingClientRect().height!*currentScreen;
    window.scrollTo({behavior: "smooth", left: 0, top: topSection});
    return topSection;
}