import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu } from 'radix-ui';
import styles from './CatalogueModal.module.scss';

type Props = {
  to: string;
  children: React.ReactNode;
};

export const CatalogueModalLink: React.FC<Props> = ({
  to,
  children,
  ...props
}) => {
  const pathname = useLocation();
  const isActive = pathname.pathname === to;
  return (
    <NavigationMenu.Link
      asChild
      active={isActive}
      className={styles.linksItem}
    >
      <Link
        to={to}
        {...props}
      >
        {children}
      </Link>
    </NavigationMenu.Link>
  );
};
