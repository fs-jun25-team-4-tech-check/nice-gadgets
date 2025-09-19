import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  cart: string[];
  favs: string[];
};

type Action = {
  addToCart: (itemId: string) => void;
  addToFavs: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  removeFromFavs: (itemId: string) => void;
};

export const useGlobalStore = create<State & Action>()(
  persist(
    (set) => ({
      cart: [],
      favs: [],
      addToCart: (itemId) =>
        set((state) => ({ cart: [...state.cart, itemId] })),
      addToFavs: (itemId) =>
        set((state) =>
          state.favs.find((id) => id === itemId) ?
            state
          : { favs: [...state.favs, itemId] },
        ),
      removeFromCart: (itemId) =>
        set((state) => ({ cart: state.cart.filter((id) => id !== itemId) })),
      removeFromFavs: (itemId) =>
        set((state) => ({ favs: state.favs.filter((id) => id !== itemId) })),
    }),
    {
      name: 'global-storage',
    },
  ),
);
