import CartList from '../../components/organisms/CartList/CartList';
import CartSummary from '../../components/organisms/CartSummary/CartSummaty';
import CartLayout from '../../components/templates/CartLayout/CartLayout';
import { useProductsById } from '../../hooks';
import { useCart } from '../../hooks/useCart';

const CartPage = () => {
  const { cart, count: cartCount } = useCart();
  const { data, isLoading } = useProductsById(Object.keys(cart));
  const totalPrice = Object.entries(cart).reduce((acc, curr) => {
    const product = data?.find((p) => p.itemId === curr[0]);
    return acc + (product?.price ?? 0) * curr[1];
  }, 0);

  return (
    <CartLayout
      cartListSection={
        <CartList
          products={data ?? []}
          cartCount={cartCount}
          isLoading={isLoading}
        />
      }
      cartSummarySection={
        <CartSummary
          isLoading={isLoading}
          totalPrice={totalPrice}
        />
      }
    />
  );
};

export default CartPage;
