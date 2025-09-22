// import { BackButton } from '../../atoms';
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
  return (
    <>
      {/* <BackButton
        params={{}}
        className={styles.backButton}
      >
        Back
      </BackButton> */}
      <h1 className={styles.cartTitle}>Cart</h1>
      {isLoading ?
        <Loader size={70} />
      : <div className={styles.cartContent}>
          {cartListSection}
          {cartSummarySection}
        </div>
      }
    </>
  );
};
export default CartLayout;
