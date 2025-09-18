// src/components/organisms/GallerySlider/GallerySlider.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ActionButton } from '../../atoms';
import { SCREEN_WIDTH } from '../../../constants/screenWidth';

import type { GallerySliderItem } from '../../../types/GallerySliderItem.ts';

import 'swiper/swiper.css';
import styles from './GallerySlider.module.scss';

interface GallerySliderProps {
  slides: GallerySliderItem[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({ slides }) => {
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
          pagination={{
            el: `.${styles.pagination}`,
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} ${styles.paginationBullet}"></span>`,
          }}
          breakpoints={{
            [SCREEN_WIDTH.SLIDER_TABLET]: { slidesPerView: 1 },
            [SCREEN_WIDTH.SLIDER_DESKTOP]: { slidesPerView: 1 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link to={slide.linkUrl}>
                <img
                  src={slide.imgUrl}
                  alt={slide.alt}
                  className={styles.slideImage}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <ActionButton
          variant="slider"
          direction="right"
          className={styles.next}
        />
      </div>
      <div className={`${styles.pagination} ${styles.paginationContainer}`} />
    </div>
  );
};
