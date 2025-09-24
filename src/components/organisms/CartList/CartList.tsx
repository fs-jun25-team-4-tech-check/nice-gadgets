import type { Product } from '../../../types';
import CartItem from '../../molecules/CartItem/CartItem';
import CartItemSkeleton from '../../molecules/CartItem/CartItemSkeleton';
import styles from './CartList.module.scss';

type Props = {
  products: Product[];
  cartCount?: number;
  isLoading?: boolean;
};

const CartList: React.FC<Props> = ({
  products,
  cartCount = 0,
  isLoading = false,
}) => {
  return (
    <div className={styles.cartList}>
      {isLoading ?
        Array.from({ length: cartCount }).map((_, index) => (
          <CartItemSkeleton key={index} />
        ))
      : products.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
            />
          );
        })
      }
    </div>
  );
};
export default CartList;
