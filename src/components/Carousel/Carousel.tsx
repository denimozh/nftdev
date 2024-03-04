'use client'

import React from 'react'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import CarouselCard from '../CarouselCard';

const Carousel = () => {
  return (
        <div className={styles.container}>
            <Swiper 
                    effect={'coverflow'} 
                    grabCursor={true} 
                    centeredSlides={true} 
                    loop={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 3000,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={styles.swiper_container} 
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <CarouselCard/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <CarouselCard/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <CarouselCard/>    
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <CarouselCard/>  
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <CarouselCard/>
                </SwiperSlide>
            </Swiper>
        </div>
  )
}

export default Carousel