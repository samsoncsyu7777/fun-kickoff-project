import Box from '@material-ui/core/Box';
import { User } from '../../interface/User';
import LogoHeader from '../LogoHeader/LogoHeader';
import NavbarTitle from '../NavbarTitle/NavbarTitle';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  loggedInUser: User;
}

const Navbar = ({ loggedInUser }: Props): JSX.Element => {
  const titlesArray = loggedInUser.isSitter
    ? [
        { title: 'notifications', link: '/notifications', withBadge: true },
        { title: 'my jobs', link: '/myJobs', withBadge: true },
        { title: 'messages', link: '/messages', withBadge: true },
      ]
    : [
        { title: 'Become A Sitter', link: '/becomeASitter', withBadge: true },
        { title: 'notifications', link: '/notifications', withBadge: true },
        { title: 'my sitters', link: '/mySitters', withBadge: true },
        { title: 'messages', link: '/messages', withBadge: true },
      ];

  return (
    <LogoHeader>
      <Box p={1} height="100%" display="flex" alignItems="center" paddingRight="65px" marginLeft="auto">
        {titlesArray.map((titleObject: { title: string; link: string; withBadge: boolean }) => {
          return (
            <NavbarTitle
              key={titleObject.title}
              title={titleObject.title}
              link={titleObject.link}
              withBadge={titleObject.withBadge}
            />
          );
        })}
        <AuthMenu user={loggedInUser} />
      </Box>
    </LogoHeader>
  );
};

export default Navbar;
