import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';
import LogoHeader from '../LogoHeader/LogoHeader';

interface Props {
  btnText: string;
}

const AuthHeader = ({ btnText }: Props): JSX.Element => {
  const classes = useStyles();
  const becomeSitterLink = '/become-sitter';
  const loginLink = '/login';
  const signupLink = '/signup';

  return (
    <LogoHeader>
      <Box p={1} className={classes.authHeader}>
        <Link to={becomeSitterLink} className={classes.link}>
          <Typography className={classes.accAside}>BECOME A SITTER</Typography>
        </Link>
        <Link to={loginLink} className={classes.link}>
          <Button color="secondary" className={classes.accBtn} variant={btnText === 'LOGIN' ? 'contained' : 'outlined'}>
            LOGIN
          </Button>
        </Link>
        <Link to={signupLink} className={classes.link}>
          <Button color="secondary" className={classes.accBtn} variant={btnText === 'LOGIN' ? 'outlined' : 'contained'}>
            SIGN UP
          </Button>
        </Link>
      </Box>
    </LogoHeader>
  );
};

export default AuthHeader;
