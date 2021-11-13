import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles(() => ({
  title: {
    textTransform: 'capitalize',
    textDecoration: 'none',
    color: custom.colors.black,
    paddingRight: '10px',
    marginLeft: '40px',
  },
}));

export default useStyles;
