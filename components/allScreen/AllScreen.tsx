import { CSSProperties, FC } from "react";

interface AllScreenProps{
    className?: string ,
    children: any,
    /**
     * in px, used when there is a header.
     */
    resHeight?: number; 
    minHeight?: boolean;
}

/**
 * allScreen 
 * @param className: to use your custom styles
 * @returns a div with a height of all the view content, and width with all view content and the children will show in the middle of the element
 */
const allScreen:FC<AllScreenProps> = ({className, children, resHeight, minHeight }) =>{
    return(
        <div className={`${className && className} w-full flex justify-center items-center`} style={{ ...(minHeight ? {minHeight: `calc(100vh - ${resHeight || 65}px)`} : {height: `calc(100vh - ${resHeight || 65}px)`}) }}>
            {children}
        </div>
    )
}

export default allScreen;