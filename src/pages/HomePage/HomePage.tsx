import { useAllProducts } from '../../hooks/useProducts';
import { staticGallerySlides } from '../../services/staticGallerySlides';
import { HomeLayout } from '../../components/templates';
import { staticCategoryData } from '../../data';

import type { CategoryBanner } from '../../types/Category';
import type { Slide } from '../../types/Slide';
import type { Product } from '../../types/api.types';

const HomePage = () => {
  const { data: products = [], isLoading, error } = useAllProducts();

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

  const brandNewSlides = products
    .filter((p) => p.year >= 2022)
    .map(productToSlide);

  const hotPriceSlides = products
    .filter((p) => p.price < p.fullPrice)
    .map(productToSlide)
    .map((slide) => ({
      ...slide,
      oldPrice: undefined,
    }));

  const mockModelsCount = [100, 95, 100];

  const shopByCategoryBanners: CategoryBanner[] = staticCategoryData.map(
    (category, i) => ({
      ...category,
      productCount: mockModelsCount[i],
    }),
  );

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products</p>;
  }

  return (
    <HomeLayout
      shopByCategoryBanners={shopByCategoryBanners}
      brandNewSlides={brandNewSlides}
      hotPriceSlides={hotPriceSlides}
      staticGallerySlides={staticGallerySlides}
    />
  );
};

export default HomePage;
