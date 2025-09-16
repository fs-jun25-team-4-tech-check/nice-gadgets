 
import styles from './ColorButton.module.scss';
import cn from 'classnames';
import type { ColorButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const ColorButton: React.FC<Props> = ({
  isSelected = false,
  color,
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={cn(styles.colorButton, className, {
        [styles.isSelected]: isSelected,
      })}
      type="button"
    ></button>
  );
};
