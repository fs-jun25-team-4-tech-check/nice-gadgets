/* eslint-disable react/prop-types */
import styles from './ColorButton.module.scss';
import cn from 'classnames';

type Props = {
  isSelected?: boolean;
  color?: string;
};

export const ColorButton: React.FC<Props> = ({ isSelected = false, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={cn(styles.colorButton, { [styles.isSelected]: isSelected })}
      type="button"
    ></button>
  );
};
