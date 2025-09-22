import { Link, useLocation } from 'react-router-dom';
import { PiHouseBold, PiCaretRightBold } from 'react-icons/pi';
import styles from './Breadcrumbs.module.scss';
import { categoryNameMap } from '../../../constants/categoryNameMap';

interface BreadcrumbsProps {
  categorySlug: string;
  productName?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  categorySlug,
  productName,
}) => {
  const location = useLocation();
  const categoryName = categoryNameMap[categorySlug] || categorySlug;

  if (location.pathname === '/') return null;

  return (
    <nav
      className={styles.breadcrumbs}
      aria-label="Breadcrumbs"
    >
      <ul>
        <li>
          <Link
            to="/"
            className={styles.homeLink}
          >
            <PiHouseBold size={16} />
          </Link>
          <PiCaretRightBold
            size={16}
            className={styles.separator}
          />
        </li>

        <li>
          {productName ?
            <>
              <Link
                className={styles.activeLink}
                to={`/catalog/${categorySlug}`}
              >
                {categoryName}
              </Link>
              <PiCaretRightBold
                size={16}
                className={styles.separator}
              />
            </>
          : <span className={styles.current}>{categoryName}</span>}
        </li>

        {productName && (
          <li>
            <span className={styles.current}>{productName}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
