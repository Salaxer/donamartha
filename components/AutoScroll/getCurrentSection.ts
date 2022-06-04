import { MutableRefObject } from "react";

const getCurrentSection= (sectionsRef: MutableRefObject<HTMLDivElement[] | null[]>):number =>{
    let indexCurrent = 0;
    sectionsRef.current.forEach((item, index)=>{
        const position = item?.getBoundingClientRect();
        if (typeof position?.top === "number") {
            if(position.top - 70 >= 0 && position.bottom <= window.innerHeight + (position.height/2)) {
                // console.log(`Element ${item?.id} is fully visible in screen`);
                indexCurrent = index;
            }else{
                // console.log(`Element ${item?.id} isn't visible in screen`);
            }
        }
    })
    console.log('current: ', sectionsRef.current[indexCurrent]);
    return indexCurrent;
}

export {getCurrentSection};