import styles from './Presentation.module.css';
import Image from 'next/image';
import DishRounded from 'public/images/dish-rounded.jpg';
import { Button } from '@Components';
import { useRouter } from 'next/router'

const Presentation = () =>{
    const router = useRouter();
    const goToMenu = () =>{
      router.push('/menu');
    }
    return (
        <div className={styles.screenShowMenu}>
            <div>
                <div className={styles.containerIMG}>
                  <Image src={DishRounded} alt='restaurant' layout='fill' objectFit='cover' className={styles.imageDish}></Image>
                </div>
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