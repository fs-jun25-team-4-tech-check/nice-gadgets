import { useGlobalStore } from '../stores/globalStore';
import { getItemNameByItemId } from '../utils/string';
import { useToast } from './useToast';

export const useFavs = () => {
  const favs = useGlobalStore((state) => state.favs);
  const addToFavsStore = useGlobalStore((state) => state.addToFavs);
  const removeFromFavsStore = useGlobalStore((state) => state.removeFromFavs);
  const count = favs.length;
  const showToast = useToast();

  const addToFavs = (itemId: string) => {
    const itemName = getItemNameByItemId(itemId);
    if (favs.find((id) => id === itemId)) {
      showToast('Product already in favourites', 'error', 'Oops...', 2000);
    } else {
      addToFavsStore(itemId);
      showToast(`Added to favourites: ${itemName}`, 'info', 'Nice!', 2000);
    }
  };

  const removeFromFavs = (itemId: string) => {
    const itemName = getItemNameByItemId(itemId);

    removeFromFavsStore(itemId);
    showToast(`Removed from favourites: ${itemName}`, 'info', 'Nice!', 2000);
  };

  const isInFavs = (itemId: string) => {
    return favs.some((id) => itemId === id);
  };

  return { favs, addToFavs, removeFromFavs, isInFavs, count };
};
