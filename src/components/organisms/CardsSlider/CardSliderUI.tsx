import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ActionButton } from '../../atoms';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types';
import { SCREEN_WIDTH } from '../../../constants/screenWidth';

import 'swiper/swiper.css';

import styles from './CardsSlider.module.scss';

type Props = {
  id: string;
  headerText: string;
  products: Product[];
};

export const CardsSliderUI: React.FC<Props> = ({
  id,
  headerText,
  products,
}) => {
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
            [SCREEN_WIDTH.SLIDER_XL]: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 'auto',
              spaceBetween: 16,
            },
          }}
          navigation={{
            prevEl: `.prev-${id}`,
            nextEl: `.next-${id}`,
          }}
        >
          {products &&
            products.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={styles.swiperSlide}
              >
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
