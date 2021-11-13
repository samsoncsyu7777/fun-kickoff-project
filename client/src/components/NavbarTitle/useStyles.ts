import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles(() => ({
  badge: {
    marginRight: '50px',
  },
  title: {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: custom.colors.black,
    paddingRight: '10px',
  },
}));

export default useStyles;
