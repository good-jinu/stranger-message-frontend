import React from 'react';
import { Box } from '@mui/material';
import useStyles from '@/styles/basicStyle';
import Header from '@/components/Header';
import { RegisterHook } from '@/hooks/authenticationHooks';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const classes = useStyles();

  RegisterHook();

  return (
    <Box>
      <Header numberOfNotifications={2}/>
      <Box className={classes.basicTemplate}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout;