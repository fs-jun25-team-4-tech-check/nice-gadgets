import { useState } from 'react';
import cn from 'classnames';
import { useGlobalStore } from '../../../stores/globalStore';
import styles from './ThemeSwitcher.module.scss';
import {
  MdOutlineWbSunny,
  MdModeNight,
  MdDesktopWindows,
} from 'react-icons/md';
import type { FC } from 'react';

type ThemeMode = 'light' | 'dark' | 'auto';

const ThemeSwitcher: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useGlobalStore();

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <MdOutlineWbSunny
            size={24}
            className={styles.icon}
          />
        );
      case 'dark':
        return (
          <MdModeNight
            size={24}
            className={styles.icon}
          />
        );
      case 'auto':
        return (
          <MdDesktopWindows
            size={24}
            className={styles.icon}
          />
        );
      default:
        return (
          <MdDesktopWindows
            size={24}
            className={styles.icon}
          />
        );
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={cn(styles.mainButton)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {getThemeIcon()}
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <button
            className={cn(styles.menuItem, {
              [styles.active]: theme === 'light',
            })}
            onClick={() => handleThemeChange('light')}
          >
            <MdOutlineWbSunny
              size={24}
              className={styles.icon}
            />
            <span className={styles.text}>Light</span>
          </button>

          <button
            className={cn(styles.menuItem, {
              [styles.active]: theme === 'dark',
            })}
            onClick={() => handleThemeChange('dark')}
          >
            <MdModeNight
              size={24}
              className={styles.icon}
            />
            <span className={styles.text}>Dark</span>
          </button>

          <button
            className={cn(styles.menuItem, {
              [styles.active]: theme === 'auto',
            })}
            onClick={() => handleThemeChange('auto')}
          >
            <MdDesktopWindows
              size={24}
              className={styles.icon}
            />
            <span className={styles.text}>Auto</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
