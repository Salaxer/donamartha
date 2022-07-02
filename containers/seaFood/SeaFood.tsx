import styles from './SeaFood.module.css';
import Image from 'next/image';
import mojarra from 'public/images/tilapia.jpg'
import { BubbleImg } from '@Components';

const SeaFood = () =>{
    return (
        <div className={styles.container}>
            <h2>CONOCE EL CATALOGO DE MARISCOS</h2>
            <div className={styles.containerBubbles}>
                <div className={styles.spaceBubble} style={{gridArea: 'a1'}}><p>Mojarra empapelada</p></div>
                <div className={styles.spaceBubble}>
                    <BubbleImg  style={{
                            zIndex: 1,
                    }} preview={false} image="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fempapelada.jpg?alt=media&token=6d72c9c4-0264-4964-95c1-8a087a3cb303" className={styles.bubble} 
                    alt='Mojarra Frita' priority={false} ></BubbleImg>
                </div>
                <div className={styles.spaceBubble}>
                    <BubbleImg style={{
                        height: '17rem',
                        width: '17rem',
                        zIndex: 2,
                    }} preview={false} image="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2FRYoVBefI3LEg1mBv1KZO?alt=media&token=86240484-a992-459d-94a7-91bb6884dee4" className={styles.bubble} alt='tilapia' priority={false} ></BubbleImg>
                </div>
                <div className={styles.spaceBubble} style={{gridArea: 'b1'}}><p>Mojarra al mojo</p></div>
                <div className={styles.spaceBubble} style={{gridArea: 'c1'}}><p>Mojarra a la diabla</p></div>
                <div className={styles.spaceBubble}>
                    <BubbleImg style={{
                        height: '20rem',
                        width: '20rem',
                        zIndex: 3
                    }} preview image={mojarra} className={styles.bubble} alt='tilapia' priority={false} ></BubbleImg>
                </div>
                <div className={styles.spaceBubble}>
                    <BubbleImg style={{
                        height: '17rem',
                        width: '17rem',
                        zIndex: 4
                    }} image="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fcamaronesalmojo.jpg?alt=media&token=689cf196-b88b-4b7a-b616-4be5c7d0b1c1" className={styles.bubble} alt='tilapia' priority={false} ></BubbleImg>
                </div>
                <div className={styles.spaceBubble} style={{gridArea: 'd1'}}><p>Camarones al mojo</p></div>
                <div className={styles.spaceBubble} style={{gridArea: 'e1'}}><p>Camarones a la diabla</p></div>
                <div className={styles.spaceBubble}>
                    <BubbleImg style={{
                        height: '12rem',
                        width: '12rem',
                        zIndex: 4
                    }} image="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2FfC0crY3SPilQw8PNcpV2?alt=media&token=bb8bc821-bcf8-4434-b3bd-f2f4cb8186ea" className={styles.bubble} alt='tilapia' priority={false} ></BubbleImg>
                </div>
            </div>
        </div>
    )
}
export default SeaFood;