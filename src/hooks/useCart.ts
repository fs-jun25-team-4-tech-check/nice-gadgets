import { useGlobalStore } from '../stores/globalStore';
import { useToast } from './useToast';

export const useCart = () => {
  const cart = useGlobalStore((state) => state.cart);
  const addToCartStore = useGlobalStore((state) => state.addToCart);
  const count = cart.length;
  const removeFromCartStore = useGlobalStore((state) => state.removeFromCart);
  const showToast = useToast();

  const addToCart = (itemId: string) => {
    if (cart.find((id) => itemId === id)) {
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
    return cart.some((id) => itemId === id);
  };

  return { cart, addToCart, removeFromCart, isInCart, count };
};
