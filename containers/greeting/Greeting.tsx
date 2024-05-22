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
                    <p>Me llamo Do&ntilde;a Martha y es un verdadero placer recibirlos aquí. Quiero recordarles que, en este lugar, cada paladar tiene su lugar aquí. Nuestra cocina se enorgullece de ofrecer una variedad de sabores y platillos que satisfacen todos los gustos. Espero que disfruten cada momento y cada bocado, y que sientan el amor y la dedicación que ponemos en cada preparación. ¡Que su experiencia culinaria sea tan única y especial como cada uno de ustedes!</p>
                </div>
            </div>
        </div>
    )
}
export default Greeting;
