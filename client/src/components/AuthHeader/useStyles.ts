import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles((theme) => ({
  accAside: {
    color: custom.colors.black,
    textDecoration: 'underline',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
  },
  link: { textDecoration: 'none' },
  accBtn: {
    width: 110,
    height: 40,
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
    marginRight: 9,
  },
}));

export default useStyles;
