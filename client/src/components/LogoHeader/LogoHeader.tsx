import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';

interface Props {
  children: React.ReactNode;
}

const LogoHeader = ({ children }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.authHeaderGrid}>
      <Box p={1} className={classes.logoBox}>
        <img className={classes.logoImage} src={logo} alt="logo" />
      </Box>
      {children}
    </Grid>
  );
};

export default LogoHeader;
