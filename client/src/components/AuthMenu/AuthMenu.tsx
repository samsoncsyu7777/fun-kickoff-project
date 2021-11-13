import { useState, MouseEvent, useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';

interface Props {
  user: User;
}

const AuthMenu = ({ user }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const history = useHistory();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const routeToProfile = useCallback(() => {
    history.push('/profile');
  }, [history]);

  return (
    <div>
      <IconButton aria-label="show auth menu" aria-controls="auth-menu" aria-haspopup="true" onClick={handleClick}>
        <Avatar alt="Profile Image" src={`https://robohash.org/${user.email}.png`} />
      </IconButton>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={routeToProfile}>Go to profile</MenuItem>
      </Menu>
    </div>
  );
};

export default AuthMenu;
