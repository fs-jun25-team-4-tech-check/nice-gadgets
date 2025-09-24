import { useCart } from '../../../hooks/useCart';
import { BackButton } from '../../atoms';
import styles from './CartLayout.module.scss';

type Props = {
  cartListSection: React.ReactNode;
  cartSummarySection: React.ReactNode;
};

const CartLayout: React.FC<Props> = ({
  cartListSection,
  cartSummarySection,
}) => {
  const { count } = useCart();
  return (
    <>
      <BackButton className={styles.backButton}>Back</BackButton>

      <h1 className={styles.cartTitle}>Cart</h1>

      {count === 0 && <p>No items in cart</p>}

      <div className={styles.cartContent}>
        {cartListSection}
        {cartSummarySection}
      </div>
    </>
  );
};
export default CartLayout;
