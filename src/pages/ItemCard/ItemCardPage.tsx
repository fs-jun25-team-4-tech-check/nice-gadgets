import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useProductDisplay } from '../../hooks';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';

const normalize = (str: string) =>
  str.toLowerCase().trim().split(' ').filter(Boolean).join('-');

const ItemCardPage = () => {
  const { productId } = useParams<{
    productId: string;
  }>();
  const location = useLocation();
  const navigate = useNavigate();

  const fromCard = location.state?.fromCard || false;

  const {
    simplifiedData,
    detailsData,
    isDetailsLoading: isLoading,
    isFetching,
    hasDetails,
    error,
  } = useProductDisplay(productId ?? '', fromCard);

  const updateVariant = (newColor?: string, newCapacity?: string) => {
    if (!detailsData) return;

    const color = newColor ?? detailsData.color;
    const capacity = newCapacity ?? detailsData.capacity;

    const variantId = `${detailsData.namespaceId}-${normalize(capacity)}-${normalize(color)}`;

    navigate(`/item/${variantId}`, { replace: true });
  };

  const handleColorChange = (color: string) => updateVariant(color);

  const handleCapacityChange = (capacity: string) =>
    updateVariant(undefined, capacity);

  return (
    <ItemCardLayout
      simplifiedProduct={simplifiedData}
      detailedProduct={detailsData}
      isLoading={isLoading}
      isFetching={isFetching}
      hasDetails={hasDetails}
      error={error}
      onColorChange={handleColorChange}
      onCapacityChange={handleCapacityChange}
      youMayAlsoLikeSection={
        <CardsSlider
          id="youMayAlsoLikeSlider"
          type="recommended"
          headerText="You may also like"
        />
      }
    />
  );
};

export default ItemCardPage;
