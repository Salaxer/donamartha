import styles from './Greeting.module.css';
import plants from 'public/images/plants.jpg'

import Image from 'next/image';

const Greeting = () =>{
    return (
        <>
            <div id="greeting" className={styles.Greeting}>
                <Image src={plants} alt='restaurante de fondo' layout='fill' objectFit='cover' className={styles.imageBlur}></Image>
            </div>
            <div className={`${styles.text} flex justify-center flex-col`}>
                <h1 >Bienvenidos</h1>
                <p>Soy do&ntilde;a martha y espero que disfruten de la buena comida que preparamos</p>
            </div>
        </>
    )
}
export default Greeting;
