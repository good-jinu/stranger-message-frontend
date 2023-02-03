import React from 'react';
import { Box } from '@mui/material';
import useStyles from '@/styles/basicStyle';
import useToggle from '@/hooks/firstHook';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const classes = useStyles();
  const toggleSets = useToggle();
  const toggle = toggleSets.toggle;
  const handleToggle = toggleSets.handleToggle;

  return (
    <Box className={classes.basicTemplate}>
      {children}
      <button onClick={handleToggle}>Click</button>
      {toggle && <h2>toggled!</h2>}
    </Box>
  )
}

export default Layout;