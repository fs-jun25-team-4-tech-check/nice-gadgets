import React from 'react';
import { CardsSliderUI } from './CardSliderUI';
import type { Product } from '../../../types';
import { useProducts } from '../../../hooks';
import Loader from '../../atoms/Loader/Loader';

export type CardsSliderType = 'newestModels' | 'hotPrices';

const SliderError = () => (
  <p>Error loading products. Please try again later.</p>
);

type Props = {
  id: string;
  type: CardsSliderType;
  headerText: string;
  productCount?: number;
};

export const CardsSlider: React.FC<Props> = ({
  id,
  type,
  headerText,
  productCount = 18,
}) => {
  const getSortOptions = () => {
    switch (type) {
      case 'newestModels':
        return { sortBy: 'year' as keyof Product, sortOrder: 'desc' as const };
      case 'hotPrices':
        return { sortBy: 'price' as keyof Product, sortOrder: 'asc' as const };
      default:
        return { sortBy: 'name' as keyof Product, sortOrder: 'asc' as const };
    }
  };

  const { sortBy, sortOrder } = getSortOptions();

  const {
    data: products,
    isLoading,
    isError,
  } = useProducts(1, productCount, '', sortBy, sortOrder);

  if (isLoading) {
    return <Loader size={500} />;
  }

  if (isError || !products) {
    return <SliderError />;
  }

  return (
    <CardsSliderUI
      id={id}
      headerText={headerText}
      products={products.data}
    />
  );
};
