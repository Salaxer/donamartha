import { PreviewImage, Ripple } from "@Components";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Place.module.css';
import Image from "next/image";

import yellowTree from 'public/images/yellow_tree.jpg';
import sunset from 'public/images/sunset.jpg';
import plants2 from 'public/images/plants2.jpg';
import flor from 'public/images/flor.jpg';

const Place = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Conoce el lugar</h2>
            </div>
            <div className={styles.swiper}>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={sunset} />
                    </PreviewImage>
                </div>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={yellowTree} />
                    </PreviewImage>
                </div>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={plants2} />
                    </PreviewImage>
                </div>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={flor} />
                    </PreviewImage>
                </div>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={flor} />
                    </PreviewImage>
                </div>
                <div className={styles.swiperItem}>
                    <PreviewImage style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src={flor} />
                    </PreviewImage>
                </div>
            </div>
        </div>
    )
}
export default Place;