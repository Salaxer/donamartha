import styles from './Presentation.module.css';
import Image from 'next/image';
import DishRounded from 'public/images/dish-rounded.jpg';
import { Button, BubbleImg } from '@Components';
import { useRouter } from 'next/router'

import { motion, useAnimation, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";


interface PresentationProps{
    animate: boolean;
}
const Variants: Variants = {
    greetAnimation: {
        opacity: 1,
        scale: 1,
        rotate: "0deg",
        x: 0,
    },
    greetHidden:{
        opacity: 0,
        x: -100,
        scale: 0,
        rotate: '-90deg',
    }
}
const Presentation: React.FC<PresentationProps> = ({animate}) =>{
    const router = useRouter();
    const goToMenu = () =>{
      router.push('/menu');
    }
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0.1 });
    useEffect(() => {
        if (inView) {
          animation.start("greetAnimation");
        } else {
          animation.start("greetHidden");
        }
      }, [animation, inView]);
    return (
        <div className={styles.screenShowMenu}>
            <div>
                <motion.div ref={ref}
                     animate={animation} transition={{delay: 0.2}} initial="greetHidden" variants={Variants}>
                    <BubbleImg preview={false} image={DishRounded} alt='restaurant' priority={false} className={styles.containerIMG}></BubbleImg>
                </motion.div>
            </div>
            <div className={styles.descriptionShowMenu}>
                <h3 className='text-5xl text-center'>Restaurante Doña Martha</h3>
                <h5 className='text-3xl text-center'>Antes Micheladas Doña Martha y con 10 años de experiencia de ofrecer servicios al cliente se presenta con una nueva imagen</h5>
                <Button iconR='pi pi-angle-right' ripple onClick={()=>goToMenu()} value='Ir a la carta' size='xl' styleButton='blue'/>
            </div>
        </div>
    )
}
export default Presentation;