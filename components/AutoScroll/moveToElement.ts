import { MutableRefObject } from "react";

export const moveToElement = (itemsRef: MutableRefObject<HTMLDivElement[] | null[]>, currentSection:number ,documentHeight: number) =>{
    const section = itemsRef.current.at(currentSection);
    const topSection = section?.getBoundingClientRect().height!*currentSection;
    window.scrollTo({behavior: "smooth", left: 0, top: topSection});
    return topSection;
}