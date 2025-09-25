import { useGlobalStore } from '../stores/globalStore';
import { getItemNameByItemId } from '../utils/string';
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
    const itemName = getItemNameByItemId(itemId);

    if (Object.keys(cart).find((id) => itemId === id)) {
      showToast('Product already in cart', 'error', 'Oops...', 2000);
    } else {
      addToCartStore(itemId);
      showToast(`Added to cart: ${itemName}`, 'info', 'Nice!', 2000);
    }
  };

  const removeFromCart = (itemId: string) => {
    const itemName = getItemNameByItemId(itemId);

    removeFromCartStore(itemId);
    showToast(`Removed from cart: ${itemName}`, 'info', 'Nice!', 2000);
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
