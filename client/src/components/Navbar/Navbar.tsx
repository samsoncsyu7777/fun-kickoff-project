import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import LogoHeader from '../LogoHeader/LogoHeader';
import NavbarTitle from '../NavbarTitle/NavbarTitle';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  loggedInUser: User;
}

const Navbar = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const link1 = '/dashboard';
  const titlesArray = loggedInUser.isSitter
    ? [
        { title: 'notifications', link: '/notifications' },
        { title: 'my jobs', link: '/myJobs' },
        { title: 'messages', link: '/messages' },
      ]
    : [
        { title: 'Become A Sitter', link: '/becomeASitter' },
        { title: 'notifications', link: '/notifications' },
        { title: 'my sitters', link: '/mySitters' },
        { title: 'messages', link: '/messages' },
      ];

  return (
    <LogoHeader>
      <Box p={1} height="100%" display="flex" alignItems="center" paddingRight="45px" marginLeft="auto">
        {titlesArray.map((titleObject: { title: string; link: string }) => {
          return (
            <NavbarTitle key={titleObject.title} title={titleObject.title} link={titleObject.link} withBadge={true} />
          );
        })}
        <AvatarDisplay loggedIn user={loggedInUser} />
        <Typography className={classes.userText} variant="h5">
          {loggedInUser.username}
        </Typography>
        <AuthMenu user={loggedInUser} />
      </Box>
    </LogoHeader>
  );
};

export default Navbar;
