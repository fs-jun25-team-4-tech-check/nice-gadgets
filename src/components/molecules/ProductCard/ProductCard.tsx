import styles from './ProductCard.module.scss';
import { ActionButton, PrimaryButton } from '../../atoms';
import type { Product } from '../../../types';
import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import { Link } from 'react-router-dom';
import { usePrefillSimplifiedProduct } from '../../../hooks';

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

  const prefillSimplified = usePrefillSimplifiedProduct();

  const itemPageLink = `/item/${product.itemId}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product.itemId);
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToFavs(product.itemId);
  };

  const handleRemovefromCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeFromCart(product.itemId);
  };

  const handleRemovefromFavs = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeFromFavs(product.itemId);
  };

  const handleProductClick = () => {
    prefillSimplified(product);
  };

  return (
    <Link
      to={itemPageLink}
      state={{ fromCard: true }}
      onClick={handleProductClick}
      className={`${styles.card} ${className}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{product.name}</h3>

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
    </Link>
  );
};

export default ProductCard;
