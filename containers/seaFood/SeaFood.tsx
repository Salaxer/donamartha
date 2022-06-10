import styles from './SeaFood.module.css';
import Image from 'next/image';
import camarones from 'public/images/tilapia.jpg'

const SeaFood = () =>{
    return (
        <div className={styles.container}>
            <h2>Conoce el catalogo de mariscos</h2>
            <div className={styles.containerBubbles}>
                <div className={styles.spaceBubble}></div>
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
                <div className={styles.spaceBubble}></div>
                <div className={styles.spaceBubble}></div>
                <div className={styles.spaceBubble}>
                    <div style={{
                        height: '200px',
                        width: '20rem',
                        zIndex: 3
                        }} className={styles.bubble}>
                        <Image className={styles.imgBubble} src={camarones} alt='tilapia'  layout='fill' objectFit='cover'></Image>
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
                <div className={styles.spaceBubble}></div>
                <div className={styles.spaceBubble}></div>
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