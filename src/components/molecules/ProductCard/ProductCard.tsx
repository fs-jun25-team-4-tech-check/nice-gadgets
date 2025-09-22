import styles from './ProductCard.module.scss';
import { ActionButton, PrimaryButton } from '../../atoms';
import type { Product } from '../../../types';
import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
}) => {
  const { addToCart, removeFromCart, isInCart: isInCartFunc } = useCart();
  const { addToFavs, removeFromFavs, isInFavs } = useFavs();

  const isInCart = isInCartFunc(product.itemId);
  const isFavourite = isInFavs(product.itemId);

  const itemPageLink = `${product.category}/${product.itemId}`;

  const handleAddToCart = () => {
    addToCart(product.itemId);
  };

  const handleAddToFavorites = () => {
    addToFavs(product.itemId);
  };

  const handleRemovefromCart = () => {
    removeFromCart(product.itemId);
  };

  const handleRemovefromFavs = () => {
    removeFromFavs(product.itemId);
  };

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <Link
        to={itemPageLink}
        className={styles.title}
      >
        {product.name}
      </Link>

      <div className={styles.priceBlock}>
        <span className={styles.price}>${product.price}</span>
        {product.price < product.fullPrice && (
          <span className={styles.oldPrice}>${product.fullPrice}</span>
        )}
      </div>

      <ul className={styles.specs}>
        <li>
          <span>Screen:</span> {product.screen}
        </li>
        <li>
          <span>Capacity:</span> {product.capacity}
        </li>
        <li>
          <span>RAM:</span> {product.ram}
        </li>
      </ul>

      <div className={styles.buttonGroup}>
        <PrimaryButton
          onClick={isInCart ? handleRemovefromCart : handleAddToCart}
          isSelected={isInCart}
        >
          {isInCart ? 'In cart' : 'Add to cart'}
        </PrimaryButton>

        <ActionButton
          variant="favourites"
          onClick={isFavourite ? handleRemovefromFavs : handleAddToFavorites}
          isSelected={isFavourite}
        />
      </div>
    </div>
  );
};

export default ProductCard;
