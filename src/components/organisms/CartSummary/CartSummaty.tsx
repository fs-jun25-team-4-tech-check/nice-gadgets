import { useCart } from '../../../hooks/useCart';
import { PrimaryButton } from '../../atoms';
import styles from './CartSummary.module.scss';

type Props = {
  totalPrice: number;
};

const CartSummary: React.FC<Props> = ({ totalPrice }) => {
  const { count } = useCart();
  return (
    <div className={styles.cartSummary}>
      <div className={styles.countPriceWrapper}>
        <h2 className={styles.totalPrice}>{`$${totalPrice}`}</h2>
        <p className={styles.countTitle}>{`Total for ${count} items`}</p>
      </div>
      <PrimaryButton className={styles.checkoutButton}>Checkout</PrimaryButton>
    </div>
  );
};
export default CartSummary;
