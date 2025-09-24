import React from 'react';
import styles from './CartItem.module.scss';
import skeletonStyles from './CartItemSkeleton.module.scss';
import { ActionButton } from '../../atoms';
import classNames from 'classnames';
import Loader from '../../atoms/Loader/Loader';

const CartItemSkeleton: React.FC = () => {
  return (
    <div className={styles.cartItem}>
      <div
        className={classNames(
          styles.contentWrapper,
          skeletonStyles.skeletonContentWrapper,
        )}
      >
        <button
          className={styles.deleteButton}
          disabled
        >
          <Loader size={16} />
        </button>
        <div className={skeletonStyles.skeletonImage}></div>
        <div className={skeletonStyles.skeletonText}></div>
      </div>
      <div className={styles.quantityPriceWrapper}>
        <div className={styles.quantityControls}>
          <ActionButton
            variant="quantity"
            direction="left"
            disabled={true}
          />
          <div className={skeletonStyles.skeletonQuantity}></div>
          <ActionButton
            variant="quantity"
            direction="right"
            disabled={true}
          />
        </div>
        <div className={skeletonStyles.skeletonPrice}></div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
