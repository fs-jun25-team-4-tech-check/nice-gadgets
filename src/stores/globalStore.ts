import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  cart: Record<string, number>;
  favs: string[];
};

type Action = {
  addToCart: (itemId: string) => void;
  addToFavs: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  removeFromFavs: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
};

export const useGlobalStore = create<State & Action>()(
  persist(
    (set) => ({
      cart: {},
      favs: [],
      addToCart: (itemId) =>
        set((state) => ({ cart: { ...state.cart, [itemId]: 1 } })),
      increaseQuantity: (itemId) =>
        set((state) => ({
          cart: { ...state.cart, [itemId]: state.cart[itemId] + 1 },
        })),
      decreaseQuantity: (itemId) =>
        set((state) => ({
          cart: { ...state.cart, [itemId]: state.cart[itemId] - 1 },
        })),
      addToFavs: (itemId) =>
        set((state) =>
          state.favs.find((id) => id === itemId) ?
            state
          : { favs: [...state.favs, itemId] },
        ),
      removeFromCart: (itemId) =>
        set((state) => {
          const newCart = { ...state.cart };
          delete newCart[itemId];
          return { cart: newCart };
        }),
      removeFromFavs: (itemId) =>
        set((state) => ({ favs: state.favs.filter((id) => id !== itemId) })),
    }),
    {
      name: 'global-storage',
    },
  ),
);
