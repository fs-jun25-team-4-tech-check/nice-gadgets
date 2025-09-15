/* eslint-disable react/prop-types */
import styles from './ColorButton.module.scss';
import cn from 'classnames';

type Props = {
  isSelected?: boolean;
};

export const ColorButton: React.FC<Props> = ({ isSelected = false }) => {
  return (
    <button
      className={cn(styles.colorButton, { [styles.isSelected]: isSelected })}
      type="button"
    ></button>
  );
};
