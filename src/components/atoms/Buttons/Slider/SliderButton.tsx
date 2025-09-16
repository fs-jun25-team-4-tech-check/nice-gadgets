 
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import { PiCaretRight as RightArrow } from 'react-icons/pi';
import styles from './SliderButton.module.scss';
import cn from 'classnames';
import type { SliderButtonProps as Props } from '../../../../types/ButtonPropsTypes';

export const SliderButton: React.FC<Props> = ({
  direction,
  disabled = false,
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.sliderButton, className)}
      type="button"
      disabled={disabled}
    >
      {direction === 'left' ?
        <LeftArrow />
      : <RightArrow />}
    </button>
  );
};
