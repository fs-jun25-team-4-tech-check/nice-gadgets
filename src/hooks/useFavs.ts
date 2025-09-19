import { useGlobalStore } from '../stores/globalStore';
import { useToast } from './useToast';

export const useFavs = () => {
  const favs = useGlobalStore((state) => state.favs);
  const addToFavsStore = useGlobalStore((state) => state.addToFavs);
  const removeFromFavsStore = useGlobalStore((state) => state.removeFromFavs);
  const count = favs.length;
  const showToast = useToast();

  const addToFavs = (itemId: string) => {
    if (favs.find((id) => id === itemId)) {
      showToast('Product already in favourites', 'error', 'Oops...');
    } else {
      addToFavsStore(itemId);
      showToast('Added to favourites', 'info', 'Nice!');
    }
  };

  const removeFromFavs = (itemId: string) => {
    removeFromFavsStore(itemId);
    showToast('Removed from favourites', 'info', 'Nice!');
  };

  const isInFavs = (itemId: string) => {
    return favs.some((id) => itemId === id);
  };

  return { favs, addToFavs, removeFromFavs, isInFavs, count };
};
