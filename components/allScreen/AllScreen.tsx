import { CSSProperties, FC } from "react";
import { useIsMobile } from "utils/hooks/mediaQuery";

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
 * AllScreen 
 * @param className: to use your custom styles
 * @returns a div with a height of all the view content, and width with all view content and the children will show in the middle of the element
 */
const AllScreen:FC<AllScreenProps> = ({className, children, resHeight, minHeight }) =>{
	const mobile = useIsMobile();
	return(
		<div className={`${className && className} w-full flex justify-center items-center`} 
		style={
			{ ...(minHeight ? 
				{minHeight: `calc(100vh - ${resHeight || (mobile ? 110 : 60)}px)`} : 
				{height: `calc(100vh - ${resHeight || (mobile ? 110 : 60)}px)`}) 
			}}>
			{children}
		</div>
	)
}

export default AllScreen;