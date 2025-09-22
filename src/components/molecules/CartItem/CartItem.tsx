import { useCart } from '../../../hooks/useCart';
import type { Product } from '../../../types';
import { ActionButton } from '../../atoms';
import styles from './CartItem.module.scss';
import { TfiClose as CloseIcon } from 'react-icons/tfi';

type Props = {
  product: Product;
};

const CartItem: React.FC<Props> = ({ product }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    getQuantityById,
    removeFromCart,
  } = useCart();
  const quantity = getQuantityById(product.itemId);

  const handleIncreaseQuantity = () => {
    increaseQuantity(product.itemId);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.itemId);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.itemId);
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.contentWrapper}>
        <button
          className={styles.deleteButton}
          onClick={handleRemoveFromCart}
        >
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
            onClick={handleDecreaseQuantity}
            disabled={quantity === 1}
          />
          <p className={styles.quantity}>{quantity}</p>
          <ActionButton
            variant="quantity"
            direction="right"
            onClick={handleIncreaseQuantity}
          />
        </div>
        <h3 className={styles.price}>{`$${product.price}`}</h3>
      </div>
    </div>
  );
};

export default CartItem;
