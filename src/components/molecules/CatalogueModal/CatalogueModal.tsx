import { NavigationMenu } from 'radix-ui';
import styles from './CatalogueModal.module.scss';
import { CgAppleWatch } from 'react-icons/cg';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaTabletAlt } from 'react-icons/fa';
import { PiCirclesFourLight } from 'react-icons/pi';
import { CatalogueModalLink } from './catalogueModalLink';
import { useLocation } from 'react-router-dom';

const CatalogueModal = () => {
  const location = useLocation();

  const isCatalogPage = location.pathname.startsWith('/catalog');

  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.menuList}>
        <NavigationMenu.Item className={styles.item}>
          <NavigationMenu.Trigger
            className={`${styles.trigger} ${isCatalogPage ? styles.activeTrigger : ''}`}
          >
            <PiCirclesFourLight className={styles.catalogIcon} />
            Catalog
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.content}>
            <ul className={styles.links}>
              <CatalogueModalLink to="/catalog/phones">
                <IoPhonePortraitOutline className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <span className={styles.linkName}>Phones</span>
                </div>
              </CatalogueModalLink>

              <CatalogueModalLink to="/catalog/tablets">
                <FaTabletAlt className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <span className={styles.linkName}>Tablets</span>
                </div>
              </CatalogueModalLink>

              <CatalogueModalLink to="/catalog/accessories">
                <CgAppleWatch className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <span className={styles.linkName}>Accessories</span>
                </div>
              </CatalogueModalLink>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.Viewport} />
      </div>
    </NavigationMenu.Root>
  );
};
export default CatalogueModal;
