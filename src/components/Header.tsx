import React, { useState } from 'react';
import useStyles from '@/styles/headerStyle';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ColorModeContext from '@/contexts/ColorModeContext';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

interface Props {
  numberOfNotifications: number;
}

const Header = ({ numberOfNotifications }: Props) => {
  const classes = useStyles();
  const [notifications, setNotifications] = useState(numberOfNotifications);

  const handleNotificationClick = () => {
    setNotifications(notifications + 1);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AppBar
          </Typography>
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge badgeContent={notifications} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <ColorModeContext.Consumer>
            {({toggleColorMode, getDarkMode}) => (
              <IconButton color="inherit" onClick={toggleColorMode}>
                {getDarkMode() ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            )}
          </ColorModeContext.Consumer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;