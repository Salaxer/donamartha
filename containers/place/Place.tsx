import { Ripple } from "@Components";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Place.module.css';

const Place = () =>{
    return (
        <div className={styles.container}>
            <h2 className="text-3xl">Conoce el lugar</h2>
            <div className={styles.swiper}>
                <div className={styles.swiperTop}></div>
                <Swiper loop autoHeight autoplay speed={500} slidesPerView={3} className="mySwiper">
                    <SwiperSlide>
                        <div className={styles.swiperItem}>dd</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.swiperItem}></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Ripple color="basic"/>
        </div>
    )
}
export default Place;