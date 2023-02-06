import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  basicTemplate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    minHeight: '100vh',
    padding: theme.spacing(4, 0, 0),
    [theme.breakpoints.up("md")]: {
      "& > *": {
        maxWidth: "900px",
      },
    },
  }
}));

export default useStyles;