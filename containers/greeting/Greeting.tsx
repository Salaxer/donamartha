import Image from 'next/image';
import styles from './Greeting.module.css';
import plants from 'public/images/plants.jpg'

interface GreetingProps{
    animate?: boolean;
}
const Greeting = ({animate}:GreetingProps) =>{
    return (
        <>
            <div id="greeting" className={styles.Greeting}>
                <Image priority src={plants} alt='restaurante de fondo' layout='fill' objectFit='cover' className={styles.imageBlur}></Image>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h1 >Bienvenidos</h1>
                    <p>Soy do&ntilde;a martha y espero que disfruten de la buena comida que preparamos</p>
                </div>
            </div>
        </>
    )
}
export default Greeting;
