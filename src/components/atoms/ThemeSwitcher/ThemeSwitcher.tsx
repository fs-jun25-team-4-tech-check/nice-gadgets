import {
  HiOutlineMoon as VscMoon,
  HiOutlineSun as VscSun,
} from 'react-icons/hi2';

import { VscColorMode } from 'react-icons/vsc';

import { useGlobalStore } from '../../../stores/globalStore';
import type { ThemeMode } from '../../../types/ThemeMode';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useGlobalStore();

  const getNextTheme = (currentTheme: ThemeMode): ThemeMode => {
    switch (currentTheme) {
      case 'auto':
        return 'light';
      case 'light':
        return 'dark';
      case 'dark':
        return 'auto';
      default:
        return 'auto';
    }
  };

  const getThemeIconComponent = (currentTheme: ThemeMode) => {
    switch (currentTheme) {
      case 'auto':
        return <VscColorMode />;
      case 'light':
        return <VscSun />;
      case 'dark':
        return <VscMoon />;
      default:
        return <VscColorMode />;
    }
  };

  const getThemeLabel = (currentTheme: ThemeMode): string => {
    switch (currentTheme) {
      case 'auto':
        return 'Auto';
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'Auto';
    }
  };

  const handleThemeChange = () => {
    const nextTheme = getNextTheme(theme);
    setTheme(nextTheme);
  };

  return (
    <button
      className={styles.themeSwitcher}
      onClick={handleThemeChange}
      title={`Switch to ${getThemeLabel(getNextTheme(theme))} theme`}
      aria-label={`Current theme: ${getThemeLabel(theme)}. Click to switch to ${getThemeLabel(getNextTheme(theme))}`}
    >
      <span className={styles.icon}>{getThemeIconComponent(theme)}</span>
    </button>
  );
};

export default ThemeSwitcher;
