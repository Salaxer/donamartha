import Image from "next/image";

import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay } from "swiper";

import styles from './Place.module.css';

import { PreviewImage } from "@Components";

const Place = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Conoce el lugar</h2>
            </div>
            <Swiper modules={[Autoplay]} className={styles.swiper} loop slidesPerView={4} autoplay={{delay: 3000}}>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="sasd" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2FIMG_20211121_170458-min.jpg?alt=media&token=83511713-6b77-48c5-9d1a-9a6b41d4bf08" />
                    </PreviewImage>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="fdsfsd" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2FIMG_20211205_141341-min.jpg?alt=media&token=a0f91236-cbe0-4338-a7bf-7e5d488608b0" />
                    </PreviewImage>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="fdsf" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2FIMG_20211205_141746-min.jpg?alt=media&token=811d0500-78de-4841-9166-9079a2a245a4" />
                    </PreviewImage>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="asdqqq" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2Fflor-min.jpg?alt=media&token=1e77bfc3-a88e-450c-b0a0-82486ae10e26" />
                    </PreviewImage>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="asdddd" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2Fplants2-min.jpg?alt=media&token=50c23788-b9be-4c8d-a8e7-f0461dd758d0" />
                    </PreviewImage>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperItem}>
                    <PreviewImage id="asdcc" style={{borderRadius: '3rem'}}>
                        <Image layout='fill' objectFit='cover' alt='My tree' src="https://firebasestorage.googleapis.com/v0/b/dona-martha.appspot.com/o/adminStorage%2Fplaces%2Fsunset-min.jpg?alt=media&token=5a339998-70ff-409a-aeff-3363c5dcfe09" />
                    </PreviewImage>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Place;