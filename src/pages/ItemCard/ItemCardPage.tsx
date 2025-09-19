// логіка потребує змін

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useProductDetails, useAllProducts } from '../../hooks';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import Loader from '../../components/atoms/Loader/Loader';
import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';

import type { ProductCategory, ProductDetails } from '../../types';

const ItemCardPage = () => {
  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();
  const navigate = useNavigate();

  const {
    data: currentData,
    isLoading,
    error,
  } = useProductDetails(productId ?? '', category as ProductCategory);

  const { data: allProductsRaw } = useAllProducts();
  const allProducts = Array.isArray(allProductsRaw) ? allProductsRaw : [];

  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    if (currentData) {
      setProduct(currentData);
    }
  }, [currentData]);

  const findVariant = (
    color: string,
    capacity: string,
  ): ProductDetails | undefined => {
    return allProducts.find(
      (p) =>
        p.itemId === product?.namespaceId &&
        p.color === color &&
        p.capacity === capacity,
    );
  };

  const updateVariant = (newColor?: string, newCapacity?: string) => {
    if (!product) return;

    const color = newColor ?? product.color;
    const capacity = newCapacity ?? product.capacity;

    const variant = findVariant(color, capacity);

    if (variant) {
      setProduct(variant);
      navigate(`/item/${category}/${variant.id}`, { replace: true });
    }
  };

  const handleColorChange = (color: string) => updateVariant(color);
  const handleCapacityChange = (capacity: string) =>
    updateVariant(undefined, capacity);

  if (isLoading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <ItemCardLayout
      items={[product]}
      categorySlug={category}
      onColorChange={handleColorChange}
      onCapacityChange={handleCapacityChange}
      //існуючий слайдер для гарячих цін для наглядності
      hotPricesSection={
        <CardsSlider
          id="hotPricesSlider"
          type="hotPrices"
          headerText="Hot prices"
        />
      }
    />
  );
};

export default ItemCardPage;
