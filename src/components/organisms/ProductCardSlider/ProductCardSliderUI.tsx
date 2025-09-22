import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import type { Product } from '../../../types';
import { SCREEN_WIDTH } from '../../../constants/screenWidth';

import 'swiper/swiper.css';

import styles from './ProductCardSlider.module.scss';
import { SliderHeader } from '../../molecules/SliderHeader/SliderHeader';
import ProductCardSkeleton from '../../molecules/ProductCard/ProductCardSkeleton';

type Props = {
  id: string;
  headerText: string;
  products: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const SliderError = () => (
  <p>Error loading products. Please try again later.</p>
);

export const CardsSliderUI: React.FC<Props> = ({
  id,
  headerText,
  products,
  isLoading,
  isError,
}) => {
  return (
    <div className={styles.sliderWrapper}>
      <SliderHeader
        sliderId={id}
        headerText={headerText}
        isLoading={isLoading}
        isError={isError}
      />

      <div className={styles.cardsWrapper}>
        {isLoading ?
          <div className={styles.skeletonWrapper}>
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        : isError ?
          <SliderError />
        : <Swiper
            modules={[Navigation, FreeMode]}
            breakpoints={{
              [SCREEN_WIDTH.SLIDER_XL]: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              [SCREEN_WIDTH.SLIDER_SM]: {
                freeMode: {
                  enabled: false,
                  sticky: true,
                },
                slidesPerView: 'auto',
                spaceBetween: 16,
              },
              0: {
                freeMode: {
                  enabled: true,
                  sticky: false,
                },
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
              products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className={styles.swiperSlide}
                >
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
        }
      </div>
    </div>
  );
};
