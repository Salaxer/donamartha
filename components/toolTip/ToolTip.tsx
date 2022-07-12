import { FC } from 'react'
import styles from './ToolTip.module.css';
import { useAnimation, motion, Variants } from 'framer-motion'

interface ToolTipProps{
    value: string;
    className?: string;
    position: 'right' | 'left' | 'bottom' | 'top'; 
}

const variantsToolTip: Variants = {
    show:{
        display: "flex",
        scale: 1,
        opacity: 1,
    },
    hide:{
        scale: 0,
        opacity: 0,
    },
    init:{
        display: "none",
        opacity: 0,
    }
}

/**
 * Tooltip i
 * 
 * @note it need the principal parent be position: relative;
 * @returns 
 */
const ToolTip:FC<ToolTipProps> = ({ value, className, position}) =>{
    const controlsAnimate = useAnimation();
    return (
        <motion.div 
            onHoverStart={()=> controlsAnimate.start("show")} 
            onHoverEnd={()=> controlsAnimate.start("hide")}
            className={styles.fillContainer}>
            <motion.div className={`${styles.position} ${styles[`position-${position}`]}`}
                variants={variantsToolTip}
                animate={controlsAnimate}
                initial="init"
            >
                <div className={styles.toolTip}
                >
                    {value}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ToolTip;