/* eslint-disable react/prop-types */
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import styles from './BackButton.module.scss';
type Props = {
  children: React.ReactNode;
};

export const BackButton: React.FC<Props> = ({ children }) => {
  return (
    <button
      type="button"
      className={styles.backButton}
    >
      <LeftArrow />
      {children}
    </button>
  );
};
