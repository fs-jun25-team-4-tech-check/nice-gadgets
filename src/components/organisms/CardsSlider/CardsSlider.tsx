import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ActionButton } from '../../atoms';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types';
import { SCREEN_WIDTH } from '../../../constants/screenWidth';
import styles from './CardsSlider.module.scss';

import 'swiper/swiper.css';

type Props = {
  id: number;
  headerText: string;
  slides: Product[] | undefined;
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
          breakpoints={{
            [SCREEN_WIDTH.SLIDER_DESKTOP]: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            [SCREEN_WIDTH.SLIDER_TABLET]: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            [SCREEN_WIDTH.SLIDER_PHONE]: {
              slidesPerView: 3,
              spaceBetween: 4,
            },
            0: { slidesPerView: 3, spaceBetween: 1 },
          }}
          navigation={{
            prevEl: `.prev-${id}`,
            nextEl: `.next-${id}`,
          }}
        >
          {slides &&
            slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <ProductCard
                  image={slide.image}
                  title={slide.name}
                  price={slide.price}
                  oldPrice={slide.fullPrice}
                  screen={slide.screen}
                  capacity={slide.capacity}
                  ram={slide.ram}
                  isInCart={false}
                  isFavorite={false}
                  onAddToCart={() => console.log(`Add to cart: ${slide.id}`)}
                  onAddToFavorites={() =>
                    console.log(`Add to fav: ${slide.id}`)
                  }
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
