/* eslint-disable react/prop-types */
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import { PiCaretRight as RightArrow } from 'react-icons/pi';
import styles from './SliderButton.module.scss';
import cn from 'classnames';

type Props = {
  direction: 'left' | 'right';
  disabled?: boolean;
};

export const SliderButton: React.FC<Props> = ({
  direction,
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles.sliderButton)}
      type="button"
      disabled={disabled}
    >
      {direction === 'left' ?
        <LeftArrow fill={disabled ? '#323542' : '#f1f2f9'} />
      : <RightArrow fill={disabled ? '#323542' : '#f1f2f9'} />}
    </button>
  );
};
