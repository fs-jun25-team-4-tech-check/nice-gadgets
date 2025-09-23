import { useCart } from '../../../hooks/useCart';
import { BackButton } from '../../atoms';
import Loader from '../../atoms/Loader/Loader';
import styles from './CartLayout.module.scss';

type Props = {
  isLoading: boolean;
  cartListSection: React.ReactNode;
  cartSummarySection: React.ReactNode;
};

const CartLayout: React.FC<Props> = ({
  cartListSection,
  cartSummarySection,
  isLoading,
}) => {
  const { count } = useCart();
  return (
    <>
      <BackButton className={styles.backButton}>Back</BackButton>
      <h1 className={styles.cartTitle}>Cart</h1>
      {count === 0 && <p>No items in cart</p>}
      {isLoading && count > 0 && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      {!isLoading && count > 0 && (
        <div className={styles.cartContent}>
          {cartListSection}
          {cartSummarySection}
        </div>
      )}
    </>
  );
};
export default CartLayout;
