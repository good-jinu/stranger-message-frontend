import React from 'react';
import { createTheme } from '@mui/material';

const StyleThemeHook = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if(typeof window !== 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, [])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
        spacing: 8,
      }),
    [darkMode],
  );

  function getDarkMode() {
    return darkMode;
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return {
    theme,
    getDarkMode,
    toggleDarkMode
  };
}

export default StyleThemeHook;