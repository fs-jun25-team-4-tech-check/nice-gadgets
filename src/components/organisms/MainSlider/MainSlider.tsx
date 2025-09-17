import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ActionButton } from '../../atoms';

import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

import styles from './MainSlider.module.scss';
export const MainSlider: React.FC = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderInnerWrapper}>
        <ActionButton
          variant="slider"
          direction="left"
          className={styles.prev}
        />
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <img
              src="/img/phones/apple-iphone-14-slider/slider-image-iphone-14.webp"
              alt="iPhone 14"
              className={styles.slideImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/phones/apple-iphone-14-slider/slider-image-iphone-14.webp"
              alt="iPhone 14"
              className={styles.slideImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/phones/apple-iphone-14-slider/slider-image-iphone-14.webp"
              alt="iPhone 14"
              className={styles.slideImage}
            />
          </SwiperSlide>
        </Swiper>

        <ActionButton
          variant="slider"
          direction="right"
          className={styles.next}
        />
      </div>
    </div>
  );
};
