import Image from 'next/image';
import styles from './Greeting.module.css';
import plants from 'public/images/plants.jpg'

interface GreetingProps{
    animate?: boolean;
}
const Greeting = ({animate}:GreetingProps) =>{
    return (
        <div className='relative w-full h-full'>
            <div id="greeting" className={styles.Greeting}>
                <div className={styles.Greting__img}>
                    <Image priority src={plants} alt='restaurante de fondo' layout='responsive' objectFit='cover' className={styles.imageBlur}></Image>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h1 >Bienvenidos</h1>
                    <p>Soy do&ntilde;a martha y espero que disfruten de la buena comida que preparamos</p>
                </div>
            </div>
        </div>
    )
}
export default Greeting;
