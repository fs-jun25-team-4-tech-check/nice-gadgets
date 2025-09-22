import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import styles from './BackButton.module.scss';
import SearchLink from '../../Links/SearchLink';
import type { LinkButtonProps as Props } from '../../../../types/ButtonPropsTypes';

const BackButton: React.FC<Props> = ({ children, params, className = '' }) => {
  return (
    <SearchLink
      params={params}
      className={`${styles.backButton} ${className}`}
    >
      <LeftArrow />
      <span className={styles.textSpan}>{children}</span>
    </SearchLink>
  );
};

export default BackButton;
