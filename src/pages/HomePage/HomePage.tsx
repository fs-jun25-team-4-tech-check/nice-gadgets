import { HomeLayout } from '../../components/templates';
import { staticCategoryData } from '../../data';

import { useState, useEffect } from 'react';
import { getProducts } from '../../services';

import type { CategoryBanner } from '../../types/Category';
import type { Slide } from '../../types/Slide';
import type { Product } from '../../types/api.types';

const HomePage = () => {
  const [brandNewSlides, setBrandNewSlides] = useState<Slide[]>([]);
  const [hotPriceSlides, setHotPriceSlides] = useState<Slide[]>([]);

  const productToSlide = (product: Product): Slide => ({
    id: product.id,
    image: product.image,
    link: `/product/${product.itemId}`,
    title: product.name,
    price: product.price,
    oldPrice: product.fullPrice,
    screen: product.screen,
    capacity: product.capacity,
    ram: product.ram,
    isInCart: false,
    isFavorite: false,
  });

  useEffect(() => {
    getProducts().then((products) => {
      const newModels = products
        .filter((p) => p.year >= 2022)
        .map(productToSlide);

      const hotPrices = products
        .filter((p) => p.price < p.fullPrice)
        .map(productToSlide)
        .map((slide) => ({ ...slide, oldPrice: undefined }));

      setBrandNewSlides(newModels);
      setHotPriceSlides(hotPrices);
    });
  }, []);
  const mockModelsCount = [100, 95, 100];

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category, i) => ({
      ...category,
      productCount: mockModelsCount[i],
    }),
  );

  return (
    <HomeLayout
      shopByCategoryBanners={shopByCategoryBanners}
      brandNewSlides={brandNewSlides}
      hotPriceSlides={hotPriceSlides}
    />
  );
};

export default HomePage;
