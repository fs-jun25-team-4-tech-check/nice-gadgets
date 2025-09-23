import { useNavigate, useParams } from 'react-router-dom';

import { useProductDetails } from '../../hooks';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';
import { BackButton } from '../../components/atoms';

const ItemCardPage = () => {
  const { productId } = useParams<{
    productId: string;
  }>();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useProductDetails(productId ?? '');

  const updateVariant = (newColor?: string, newCapacity?: string) => {
    if (!product) return;

    const color = newColor ?? product.color;
    const capacity = newCapacity ?? product.capacity;

    const normalize = (str: string) =>
      str.toLowerCase().trim().split(' ').filter(Boolean).join('-');

    const variantId = `${product.namespaceId}-${normalize(capacity)}-${normalize(color)}`;
    navigate(`/item/${variantId}`, { replace: true });
  };

  const handleColorChange = (color: string) => updateVariant(color);
  const handleCapacityChange = (capacity: string) =>
    updateVariant(undefined, capacity);

  if (error || !product) {
    return (
      <div>
        <BackButton fallbackPath="/">Back</BackButton>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <ItemCardLayout
      items={[product]}
      isLoading={isLoading}
      onColorChange={handleColorChange}
      onCapacityChange={handleCapacityChange}
      youMayAlsoLikeSection={
        <CardsSlider
          id="youMayAlsoLikeSlider"
          type="hotPrices"
          headerText="You may also like"
        />
      }
    />
  );
};

export default ItemCardPage;
