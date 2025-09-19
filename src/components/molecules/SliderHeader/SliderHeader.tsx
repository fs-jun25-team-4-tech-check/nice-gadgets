import React from 'react';
import { ActionButton } from '../../atoms';
import styles from './SliderHeader.module.scss';

type Props = {
  headerText: string;
  sliderId: string;
  isLoading: boolean;
  isError: boolean;
};

export const SliderHeader: React.FC<Props> = ({
  headerText,
  sliderId,
  isLoading,
  isError,
}) => {
  const isDisabled = isLoading || isError;

  return (
    <div className={styles.sliderHeader}>
      <h2>{headerText}</h2>

      <div className={styles.sliderButtons}>
        <ActionButton
          variant="slider"
          direction="left"
          className={`prev-${sliderId}`}
          disabled={isDisabled}
        />

        <ActionButton
          variant="slider"
          direction="right"
          className={`next-${sliderId}`}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};
