import { useNavigate, useParams } from 'react-router-dom';

import { useProductDetails } from '../../hooks';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import Loader from '../../components/atoms/Loader/Loader';
import { CardsSlider } from '../../components/organisms/ProductCardSlider/ProductCardsSlider';

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

    const variantId = `${product.namespaceId}-${capacity.toLowerCase()}-${color}`;

    navigate(`/item/${variantId}`, { replace: true });
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
