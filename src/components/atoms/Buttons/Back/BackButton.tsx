import { Link } from 'react-router-dom';
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import styles from './BackButton.module.scss';
import SearchLink from '../../Links/SearchLink';
import type { LinkButtonProps as Props } from '../../../../types/ButtonPropsTypes';

const BackButton: React.FC<Props> = ({ children, params }) => {
  const isRoutePath =
    params.to && typeof params.to === 'string' && params.to.startsWith('/');

  if (isRoutePath && typeof params.to === 'string') {
    return (
      <Link
        to={params.to}
        className={styles.backButton}
      >
        <LeftArrow />
        <span className={styles.textSpan}>{children}</span>
      </Link>
    );
  }

  return (
    <SearchLink
      params={params}
      className={styles.backButton}
    >
      <LeftArrow />
      <span className={styles.textSpan}>{children}</span>
    </SearchLink>
  );
};

export default BackButton;
