import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  title: string;
  link: string;
  withBadge: boolean;
}

const NavbarTitle = ({ title, link, withBadge }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Badge color="error" variant="dot" invisible={!withBadge}>
      <Typography component={Link} to={link} variant="h3" className={classes.title}>
        {title}
      </Typography>
    </Badge>
  );
};

export default NavbarTitle;
