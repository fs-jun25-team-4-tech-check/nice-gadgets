import { NavigationMenu } from 'radix-ui';
import styles from './CatalogueModal.module.scss';
import { NavLink } from 'react-router-dom';
import { CgAppleWatch } from 'react-icons/cg';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { FaTabletAlt } from 'react-icons/fa';
import { PiCirclesFourLight } from 'react-icons/pi';

const CatalogueModal = () => {
  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.menuList}>
        <NavigationMenu.Item className={styles.item}>
          <NavigationMenu.Trigger className={styles.trigger}>
            <PiCirclesFourLight className={styles.catalogIcon} />
            Catalog
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.content}>
            <ul className={styles.links}>
              <li className={styles.linksItem}>
                <IoPhonePortraitOutline className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <NavLink
                    to="/catalog/phones"
                    className={({ isActive }) =>
                      `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    Phones
                  </NavLink>
                </div>
              </li>
              <li className={styles.linksItem}>
                <FaTabletAlt className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <NavLink
                    to="/catalog/tablets"
                    className={({ isActive }) =>
                      `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    Tablets
                  </NavLink>
                </div>
              </li>
              <li className={styles.linksItem}>
                <CgAppleWatch className={styles.linkIcon} />
                <div className={styles.linkWrapper}>
                  <NavLink
                    to="/catalog/accessories"
                    className={({ isActive }) =>
                      `uppercase-text ${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    Accessories
                  </NavLink>
                </div>
              </li>
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
