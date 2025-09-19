import React from 'react';
import { CardsSliderUI } from './ProductCardSliderUI';
import type { Product } from '../../../types';
import { useProducts } from '../../../hooks';

export type CardsSliderType = 'newestModels' | 'hotPrices';

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

  return (
    <CardsSliderUI
      id={id}
      headerText={headerText}
      products={products?.data}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
