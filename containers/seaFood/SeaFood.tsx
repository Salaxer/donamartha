import styles from './SeaFood.module.css';
import Image from 'next/image';
import camarones from 'public/images/tilapia.jpg'
import { PreviewImage } from '@Components';

const SeaFood = () =>{
    return (
        <div className={styles.container}>
            <h2>CONOCE EL CATALOGO DE MARISCOS</h2>
            <div className={styles.containerBubbles}>
                <div className={styles.spaceBubble} style={{gridArea: 'a1'}}><p>Mojarra frita</p></div>
                <div className={styles.spaceBubble}>
                    <div style={{zIndex: 1}} className={styles.bubble}>
                        <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
                    </div>
                </div>
                <div className={styles.spaceBubble}>
                    <div style={{
                            height: '17rem',
                            width: '17rem',
                            zIndex: 2,
                        }} className={styles.bubble}>
                        <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
                    </div>
                </div>
                <div className={styles.spaceBubble} style={{gridArea: 'b1'}}><p>Mojarra al mojo</p></div>
                <div className={styles.spaceBubble} style={{gridArea: 'c1'}}><p>Mojarra Empapelada</p></div>
                <div className={styles.spaceBubble}>
                    <div style={{
                        height: '20rem',
                        width: '20rem',
                        zIndex: 3
                        }} className={styles.bubble}>
                        <PreviewImage style={{borderRadius: '50%'}} classToModal={styles.imgBubbleOpen}>
                            <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
                        </PreviewImage>
                    </div>
                </div>
                <div className={styles.spaceBubble}>
                    <div style={{
                        height: '17rem',
                        width: '17rem',
                        zIndex: 4
                        }} className={styles.bubble}>
                        <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
                    </div>
                </div>
                <div className={styles.spaceBubble} style={{gridArea: 'd1'}}><p>Camarones al mojo</p></div>
                <div className={styles.spaceBubble} style={{gridArea: 'e1'}}><p>Camarones a la diabla</p></div>
                <div className={styles.spaceBubble}>
                    <div style={{
                        height: '12rem',
                        width: '12rem',
                        zIndex: 4
                        }} className={styles.bubble}>
                        <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SeaFood;