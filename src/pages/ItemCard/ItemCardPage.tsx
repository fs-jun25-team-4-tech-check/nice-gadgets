import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useProductDisplay } from '../../hooks';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';

const ItemCardPage = () => {
  const { productId } = useParams<{
    productId: string;
  }>();
  const location = useLocation();
  const navigate = useNavigate();

  const fromCard = location.state?.fromCard || false;

  const {
    data: product,
    isLoading,
    isPlaceholderData,
    hasDetails,
    error,
  } = useProductDisplay(productId ?? '', fromCard);

  const updateVariant = (newColor?: string, newCapacity?: string) => {
    if (!product) return;

    const color = newColor ?? product.color;
    const capacity = newCapacity ?? product.capacity;

    const namespaceId =
      'namespaceId' in product ?
        product.namespaceId
      : product.itemId.split('-')[0];

    const variantId = `${namespaceId}-${capacity?.toLowerCase()}-${color}`;

    navigate(`/item/${variantId}`, { replace: true, state: { fromCard } });
  };

  const handleColorChange = (color: string) => updateVariant(color);

  const handleCapacityChange = (capacity: string) =>
    updateVariant(undefined, capacity);

  return (
    <ItemCardLayout
      product={product}
      isLoading={isLoading}
      isPlaceholderData={isPlaceholderData}
      hasDetails={hasDetails}
      error={error}
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
