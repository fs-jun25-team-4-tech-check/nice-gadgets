import type { Product } from '../../../types';
import { ActionButton } from '../../atoms';
import styles from './CartItem.module.scss';
import { TfiClose as CloseIcon } from 'react-icons/tfi';

type Props = {
  product: Product;
};

const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.contentWrapper}>
        <button className={styles.deleteButton}>
          <CloseIcon className={styles.deleteIcon} />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className={styles.itemImage}
        />
        <p className={styles.itemName}>{product.name}</p>
      </div>
      <div className={styles.quantityPriceWrapper}>
        <div className={styles.quantityControls}>
          <ActionButton
            variant="quantity"
            direction="left"
            disabled
          />
          <p className={styles.quantity}>1</p>
          <ActionButton
            variant="quantity"
            direction="right"
          />
        </div>
        <h3 className={styles.price}>{`$${product.price}`}</h3>
      </div>
    </div>
  );
};

export default CartItem;
