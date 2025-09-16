import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { ActionButton, PrimaryButton } from '../../atoms';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  screen: string;
  capacity: string;
  ram: string;
  onAddToCart?: () => void;
  onAddToFavorites?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  screen,
  capacity,
  ram,
  onAddToCart,
  onAddToFavorites,
}) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    onAddToCart?.();
  };

  const handleAddToFavorites = () => {
    setIsFavorite((prev) => !prev); // toggle
    onAddToFavorites?.();
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.priceBlock}>
        <span className={styles.price}>${price}</span>
        {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
      </div>

      <ul className={styles.specs}>
        <li>
          <span>Screen:</span> {screen}
        </li>
        <li>
          <span>Capacity:</span> {capacity}
        </li>
        <li>
          <span>RAM:</span> {ram}
        </li>
      </ul>

      <div className={styles.buttonGroup}>
        <PrimaryButton
          onClick={handleAddToCart}
          isSelected={isInCart}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </PrimaryButton>

        <ActionButton
          variant="favourites"
          onClick={handleAddToFavorites}
          isSelected={isFavorite}
        />
      </div>
    </div>
  );
};

export default ProductCard;
