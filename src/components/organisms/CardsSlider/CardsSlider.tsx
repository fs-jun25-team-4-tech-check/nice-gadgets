import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ActionButton } from '../../atoms';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Slide } from '../../../types/Slide';

import styles from './CardsSlider.module.scss';

import 'swiper/swiper.css';

type Props = {
  id: number;
  headerText: string;
  slides: Slide[];
};

export const CardsSlider: React.FC<Props> = ({ id, headerText, slides }) => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderContent}>
        <h2>{headerText}</h2>
        <div className={styles.sliderButtons}>
          <ActionButton
            variant="slider"
            direction="left"
            className={`${styles.prev} prev-${id}`}
          />
          <ActionButton
            variant="slider"
            direction="right"
            className={`${styles.next} next-${id}`}
          />
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            prevEl: `.prev-${id}`,
            nextEl: `.next-${id}`,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <ProductCard
                image={slide.image}
                title={slide.title}
                price={slide.price}
                oldPrice={slide.oldPrice}
                screen={slide.screen}
                capacity={slide.capacity}
                ram={slide.ram}
                isInCart={slide.isInCart}
                isFavorite={slide.isFavorite}
                onAddToCart={() => console.log(`Add to cart: ${slide.id}`)}
                onAddToFavorites={() => console.log(`Add to fav: ${slide.id}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
