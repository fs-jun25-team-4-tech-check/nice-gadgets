import ItemCardLayout from '../../components/templates/ItemCardLayout/ItemCardLayout';
import { useProductDetails } from '../../hooks';
import { useParams } from 'react-router-dom';

const ItemCardPage = () => {
  const { productId = 'apple-watch-series-3-38mm-space-gray' } = useParams<{
    productId?: string;
  }>();

  const { data } = useProductDetails(productId, 'phones');

  if (!productId) {
    return <div>Problem...</div>;
  }

  console.log('It works');
  console.log(productId);
  console.log(data);

  return (
    <ItemCardLayout
      itemId={productId}
      category={category}
    />
  );
};

export default ItemCardPage;
