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
                    transition={{delay: 0.4}} initial={{
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
                <h5 className='text-3xl text-center max-w-4xl'>
                Renovada y con más sabor que nunca, Micheladas Doña Martha se reinventa tras 10 años de dedicación y servicio al cliente. 
                Con una década de experiencia en alegrar paladares y corazones, nos enorgullece presentar nuestra nueva imagen. 
                Esta transformación refleja nuestro compromiso con la calidad hacia nuestros clientes. 
                Ven y descubre una gran experiencia!
                </h5>
                <Button iconR={<ArrowRightIcon/>} ripple onClick={()=>goToMenu()} value='Ir a la carta' size='xl' styleButton='blue'/>
            </div>
        </div>
    )
}
export default Presentation;