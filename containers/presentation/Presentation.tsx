import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';

import styles from './Presentation.module.css';
import DishRounded from 'public/images/dish-rounded.jpg';
import { Button, BubbleImg } from '@Components';



interface PresentationProps{
    animate?: boolean;
}
const Presentation: React.FC<PresentationProps> = ({animate}) =>{
    
    const router = useRouter();
    const goToMenu = () =>{
      router.push('/menu');
    }
    return (
        <div className={styles.screenShowMenu}>
            <div>
                <motion.div
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: "0deg",
                        x: 0,
                    }} 
                    transition={{delay: 0.2}} initial={{
                        opacity: 0,
                        x: -100,
                        scale: 0,
                        rotate: '-90deg',
                    }}>
                    <BubbleImg preview={false} image={DishRounded} alt='restaurant' priority={false} className={styles.containerIMG}></BubbleImg>
                </motion.div>
            </div>
            <div className={styles.descriptionShowMenu}>
                <h3 className='text-5xl text-center'>Restaurante Doña Martha</h3>
                <h5 className='text-3xl text-center'>Antes Micheladas Doña Martha y con 10 años de experiencia de ofrecer servicios al cliente se presenta con una nueva imagen</h5>
                <Button iconR={<ArrowRightIcon/>} ripple onClick={()=>goToMenu()} value='Ir a la carta' size='xl' styleButton='blue'/>
            </div>
        </div>
    )
}
export default Presentation;