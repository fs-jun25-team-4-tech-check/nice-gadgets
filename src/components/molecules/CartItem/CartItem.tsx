import { Link } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import type { Product } from '../../../types';
import { ActionButton } from '../../atoms';
import styles from './CartItem.module.scss';
import { TfiClose as CloseIcon } from 'react-icons/tfi';
import { useState } from 'react';
import Loader from '../../atoms/Loader/Loader';

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

  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncreaseQuantity = () => {
    increaseQuantity(product.itemId);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.itemId);
  };

  const handleRemoveFromCart = () => {
    setIsRemoving(true);

    removeFromCart(product.itemId);
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.contentWrapper}>
        {isRemoving ?
          <Loader size={16} />
        : <button
            className={styles.deleteButton}
            onClick={handleRemoveFromCart}
          >
            <CloseIcon className={styles.deleteIcon} />
          </button>
        }
        <Link to={`/item/${product.itemId}`}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.itemImage}
          />
        </Link>
        <Link
          to={`/item/${product.itemId}`}
          className={styles.itemName}
        >
          {product.name}
        </Link>
      </div>
      <div className={styles.quantityPriceWrapper}>
        <div className={styles.quantityControls}>
          <ActionButton
            variant="quantity"
            direction="left"
            onClick={handleDecreaseQuantity}
            disabled={quantity <= 1}
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
