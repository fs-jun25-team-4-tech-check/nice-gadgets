import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '../types/ThemeMode';

type State = {
  cart: Record<string, number>;
  favs: string[];
  theme: ThemeMode;
};

type Action = {
  addToCart: (itemId: string) => void;
  addToFavs: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  removeFromFavs: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  setTheme: (theme: ThemeMode) => void;
};

export const useGlobalStore = create<State & Action>()(
  persist(
    (set) => ({
      cart: {},
      favs: [],
      theme: 'auto',
      addToCart: (itemId) =>
        set((state) => ({ cart: { ...state.cart, [itemId]: 1 } })),
      increaseQuantity: (itemId) =>
        set((state) => ({
          cart: { ...state.cart, [itemId]: state.cart[itemId] + 1 },
        })),
      decreaseQuantity: (itemId) =>
        set((state) => ({
          cart: { ...state.cart, [itemId]: (state.cart[itemId] ?? 0) - 1 },
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
      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: 'global-storage',
    },
  ),
);
