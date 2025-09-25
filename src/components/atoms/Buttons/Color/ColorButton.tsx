import styles from './ColorButton.module.scss';
import cn from 'classnames';
import type { ColorButtonProps as Props } from '../../../../types/ButtonPropsTypes';

const ColorButton: React.FC<Props> = ({
  isSelected = false,
  color,
  onClick = () => {},
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={cn(styles.colorButton, className, {
        [styles.isSelected]: isSelected,
      })}
      type="button"
      disabled={disabled}
    ></button>
  );
};

export default ColorButton;
