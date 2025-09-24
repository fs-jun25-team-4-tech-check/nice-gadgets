import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import type { ProductDetails } from '../../../types';
import { ActionButton, ColorButton, PrimaryButton } from '../../atoms';
import productColorOptions from '../../../assets/data/productColorOptions.json';

import styles from './SelectorsSection.module.scss';

type ColorKey = keyof typeof productColorOptions;

interface SelectorsSectionProps {
  product: ProductDetails;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
}

export const SelectorsSection = ({
  product,
  onColorChange,
  onCapacityChange,
}: SelectorsSectionProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToFavs, removeFromFavs, isInFavs } = useFavs();

  const isInCartState = isInCart(product.id);
  const isFavourite = isInFavs(product.id);

  return (
    <section className={styles.section}>
      <div className={styles.selectorGroup}>
        <p className={styles.label}>Available colors</p>
        <div className={styles.colorOptions}>
          {product.colorsAvailable?.map((color) => (
            <ColorButton
              key={color}
              isSelected={product.color === color}
              color={
                productColorOptions[color as ColorKey] ||
                productColorOptions['out-of-stock']
              }
              onClick={() => onColorChange?.(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      <div className={styles.selectorGroup}>
        <p className={styles.label}>Select capacity</p>
        <div className={styles.capacityOptions}>
          {product.capacityAvailable?.map((capacity) => (
            <button
              key={capacity}
              className={`${styles.capacityBtn} ${product.capacity === capacity ? styles.active : ''}`}
              onClick={() => onCapacityChange?.(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.newPrice}>${product.priceDiscount}</span>
        <span className={styles.oldPrice}>${product.priceRegular}</span>
      </div>

      <div className={styles.buttonGroup}>
        <PrimaryButton
          onClick={
            isInCartState ?
              () => removeFromCart(product.id)
            : () => addToCart(product.id)
          }
          isSelected={isInCartState}
        >
          {isInCartState ? 'Added' : 'Add to cart'}
        </PrimaryButton>

        <ActionButton
          variant="favourites"
          onClick={
            isFavourite ?
              () => removeFromFavs(product.id)
            : () => addToFavs(product.id)
          }
          isSelected={isFavourite}
        />
      </div>

      <div className={styles.specs}>
        <div className={styles.specRow}>
          <span className={styles.specName}>Screen</span>
          <span className={styles.specValue}>{product.screen}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>Resolution</span>
          <span className={styles.specValue}>{product.resolution}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>Processor</span>
          <span className={styles.specValue}>{product.processor}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specName}>RAM</span>
          <span className={styles.specValue}>{product.ram}</span>
        </div>
      </div>
    </section>
  );
};
