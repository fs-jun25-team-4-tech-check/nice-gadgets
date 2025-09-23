import { useGlobalStore } from '../stores/globalStore';
import { useToast } from './useToast';

export const useCart = () => {
  const cart = useGlobalStore((state) => state.cart);
  const addToCartStore = useGlobalStore((state) => state.addToCart);
  const count = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
  const removeFromCartStore = useGlobalStore((state) => state.removeFromCart);
  const increaseQuantity = useGlobalStore((state) => state.increaseQuantity);
  const decreaseQuantity = useGlobalStore((state) => state.decreaseQuantity);
  const showToast = useToast();

  const getQuantityById = (itemId: string) => {
    return cart[itemId] ?? 0;
  };

  const addToCart = (itemId: string) => {
    if (Object.keys(cart).find((id) => itemId === id)) {
      showToast('Product already in cart', 'error', 'Oops...');
    } else {
      addToCartStore(itemId);
      showToast('Added to cart', 'info', 'Nice!');
    }
  };

  const removeFromCart = (itemId: string) => {
    removeFromCartStore(itemId);
    showToast('Removed from cart', 'info', 'Nice!');
  };

  const isInCart = (itemId: string) => {
    return itemId in cart;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    isInCart,
    count,
    increaseQuantity,
    decreaseQuantity,
    getQuantityById,
  };
};
