import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ActionButton } from '../../atoms';

import type { GallerySliderItem } from '../../../types/GallerySliderItem';

import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

import styles from './GallerySlider.module.scss';

interface GallerySliderProps {
  gallerySlides: GallerySliderItem[];
}

export const GallerySlider: React.FC<GallerySliderProps> = ({
  gallerySlides,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
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
        >
          {gallerySlides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={styles.slideElement}
            >
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
    </div>
  );
};
