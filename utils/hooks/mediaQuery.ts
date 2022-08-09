import { useMediaQuery } from "react-responsive"

/**
 * 
 * @returns true if device is mobile
 */
export const useIsMobile = ():boolean =>{
	const mediaQuery = useMediaQuery({query: '(max-width: 769px)'});
	return mediaQuery;
}

export const useIsTablet = ():boolean => useMediaQuery({query: '(max-width: 1000px)'});