import React from 'react';
import { CardsSliderUI } from './ProductCardSliderUI';
import { useSliderProducts, type CardsSliderType } from '../../../hooks';

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
  const {
    data: products,
    isLoading,
    isError,
  } = useSliderProducts(type, productCount);

  return (
    <CardsSliderUI
      id={id}
      headerText={headerText}
      products={products}
      isLoading={isLoading}
      isError={isError}
    />
  );
};
