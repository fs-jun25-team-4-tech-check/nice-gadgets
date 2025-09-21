import { useFavs } from '../../../hooks/useFavs';
import Breadcrumbs from '../../molecules/Breadcrumbs/Breadcrumbs';
import styles from './FavouritesLayout.module.scss';

type Props = {
  favouritesListSection: React.ReactNode;
};
const FavouritesLayout: React.FC<Props> = ({ favouritesListSection }) => {
  const { count } = useFavs();

  return (
    <>
      <Breadcrumbs categorySlug="Favourites" />
      <h1 className={styles.favTitle}>Favourites</h1>
      <p className={styles.favCount}>
        {count ? `${count} models` : 'Favourites is empty'}
      </p>
      {favouritesListSection}
    </>
  );
};

export default FavouritesLayout;
