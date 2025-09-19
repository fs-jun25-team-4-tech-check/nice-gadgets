import { useProductDetails } from '../../hooks';
import { useParams } from 'react-router-dom';
import type { ProductCategory } from '../../services';
import { ItemCardLayout } from '../../components/templates/ItemCardLayout/ItemCardLayout';
import Loader from '../../components/atoms/Loader/Loader';

const ItemCardPage = () => {
  const { productId } = useParams<{
    productId: string;
  }>();

  const category: ProductCategory = 'phones';

  const { data, isLoading, error } = useProductDetails(
    productId ?? '',
    category,
  );

  if (isLoading) return <Loader />;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>Error: Product not found</p>;

  return <ItemCardLayout items={[data]} />;
};

export default ItemCardPage;
