import { useMediaQuery } from "react-responsive"

/**
 * 
 * @returns true if device is mobile
 */
export const useIsMobile = ():boolean =>{
    const mediaQuery = useMediaQuery({query: '(max-width: 769px)'});
    return mediaQuery;
}