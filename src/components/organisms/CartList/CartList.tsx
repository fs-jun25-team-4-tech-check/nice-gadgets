import type { Product } from '../../../types';
import CartItem from '../../molecules/CartItem/CartItem';
import styles from './CartList.module.scss';

type Props = {
  products: Product[];
};

const CartList: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.cartList}>
      {products.map((product) => {
        return (
          <CartItem
            key={product.itemId}
            product={product}
          />
        );
      })}
    </div>
  );
};
export default CartList;
