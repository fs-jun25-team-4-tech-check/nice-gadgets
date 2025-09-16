import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import styles from './BackButton.module.scss';
import SearchLink from '../../Links/SearchLink';
import type { LinkButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const BackButton: React.FC<Props> = ({ children, params }) => {
  return (
    <SearchLink
      params={params}
      className={styles.backButton}
    >
      <LeftArrow />
      {children}
    </SearchLink>
  );
};
