import React from 'react';

const ColorModeContext =  React.createContext({
  toggleColorMode: (): void => {},
  getDarkMode: (): boolean => {return false},
});

export default ColorModeContext;