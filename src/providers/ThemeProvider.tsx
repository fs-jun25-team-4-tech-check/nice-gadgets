import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useGlobalStore } from '../stores/globalStore';
import type { ThemeMode } from '../types/ThemeMode';

type Props = {
  children: ReactNode;
};

const getActualTheme = (theme: ThemeMode): 'light' | 'dark' => {
  if (theme === 'auto') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ?
        'dark'
      : 'light';
  }
  return theme;
};

export const ThemeProvider = ({ children }: Props) => {
  const theme = useGlobalStore((state) => state.theme);

  useEffect(() => {
    const actualTheme = getActualTheme(theme);

    document.documentElement.setAttribute('data-theme', actualTheme);

    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newActualTheme = getActualTheme('auto');
        document.documentElement.setAttribute('data-theme', newActualTheme);
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  return <>{children}</>;
};
