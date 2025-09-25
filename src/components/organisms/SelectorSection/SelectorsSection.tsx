import { useCart } from '../../../hooks/useCart';
import { useFavs } from '../../../hooks/useFavs';
import type { Product, ProductDetails } from '../../../types';
import { ActionButton, ColorButton, PrimaryButton } from '../../atoms';
import productColorOptions from '../../../assets/data/productColorOptions.json';

import styles from './SelectorsSection.module.scss';
import skeletonStyles from './SelectorsSectionSkeleton.module.scss';
import ItemOptionSelectButton from '../../atoms/Buttons/ItemOptionSelectButton/ItemOptionSelectButton';

type ColorKey = keyof typeof productColorOptions;

interface SelectorsSectionProps {
  product: Product | ProductDetails;
  isFetching?: boolean;
  isLoading?: boolean;
  onColorChange?: (color: string) => void;
  onCapacityChange?: (capacity: string) => void;
}

export const SelectorsSection = ({
  product,
  isFetching,
  isLoading,
  onColorChange,
  onCapacityChange,
}: SelectorsSectionProps) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToFavs, removeFromFavs, isInFavs } = useFavs();

  const isDetailed = !('itemId' in product);

  const productId = isDetailed ? product.id : product.itemId;

  const isInCartState = isInCart(productId);
  const isFavourite = isInFavs(productId);

  const colorOptions = isDetailed ? product.colorsAvailable : [product.color];
  const capacityOptions =
    isDetailed ? product.capacityAvailable : [product.capacity];
  const regularPrice = isDetailed ? product.priceRegular : product.fullPrice;
  const discountPrice = isDetailed ? product.priceDiscount : product.price;

  const showSkeletons = isLoading || isFetching;

  return (
    <section className={styles.section}>
      <div className={styles.selectorGroup}>
        <p className={styles.label}>Available colors</p>

        <div className={styles.colorOptions}>
          {colorOptions.map((color) => (
            <ColorButton
              key={color}
              isSelected={product.color === color}
              color={
                productColorOptions[color as ColorKey] ||
                productColorOptions['out-of-stock']
              }
              onClick={() => onColorChange?.(color)}
              disabled={isLoading || isFetching}
              aria-label={`Select ${color} color`}
            />
          ))}

          {showSkeletons &&
            colorOptions.length === 1 &&
            [1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={skeletonStyles.colorButtonSkeleton}
              ></div>
            ))}
        </div>
      </div>

      <div className={styles.selectorGroup}>
        <p className={styles.label}>Select capacity</p>

        <div className={styles.capacityOptions}>
          {capacityOptions.map((capacity) => (
            <ItemOptionSelectButton
              key={capacity}
              onClick={() => onCapacityChange?.(capacity)}
              isSelected={product.capacity === capacity}
              disabled={isLoading || isFetching}
            >
              {capacity}
            </ItemOptionSelectButton>
          ))}

          {showSkeletons &&
            capacityOptions.length === 1 &&
            [1, 2, 3].map((i) => (
              <div
                key={i}
                className={skeletonStyles.capacityBtnSkeleton}
              ></div>
            ))}
        </div>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.newPrice}>${discountPrice}</span>
        <span className={styles.oldPrice}>${regularPrice}</span>
      </div>

      <div className={styles.buttonGroup}>
        <PrimaryButton
          onClick={
            isInCartState ?
              () => removeFromCart(productId)
            : () => addToCart(productId)
          }
          isSelected={isInCartState}
          disabled={isLoading || isFetching}
        >
          {isInCartState ? 'Added' : 'Add to cart'}
        </PrimaryButton>

        <ActionButton
          variant="favourites"
          onClick={
            isFavourite ?
              () => removeFromFavs(productId)
            : () => addToFavs(productId)
          }
          isSelected={isFavourite}
          disabled={isLoading || isFetching}
        />
      </div>

      <div className={styles.specs}>
        <div className={styles.specRow}>
          <span className={styles.specName}>Screen</span>
          <span className={styles.specValue}>{product.screen}</span>
        </div>

        {isDetailed && (
          <div className={styles.specRow}>
            <span className={styles.specName}>Resolution</span>
            <span className={styles.specValue}>{product.resolution}</span>
          </div>
        )}

        {isDetailed && (
          <div className={styles.specRow}>
            <span className={styles.specName}>Processor</span>
            <span className={styles.specValue}>{product.processor}</span>
          </div>
        )}

        <div className={styles.specRow}>
          <span className={styles.specName}>RAM</span>
          <span className={styles.specValue}>{product.ram}</span>
        </div>
      </div>
    </section>
  );
};
