import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PiCaretLeft as LeftArrow } from 'react-icons/pi';
import styles from './BackButton.module.scss';

interface BackButtonProps {
  children?: React.ReactNode;
  fallbackPath?: string;
  alwaysUseFallback?: boolean;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  children = 'Back',
  fallbackPath = '/',
  alwaysUseFallback = false,
  className,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (alwaysUseFallback) {
      navigate(fallbackPath);
      return;
    }

    if (location.key !== 'default') {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBackClick}
      className={`${styles.backButton} ${className ?? ''}`}
    >
      <LeftArrow />
      <span className={styles.textSpan}>{children}</span>
    </button>
  );
};

export default BackButton;
