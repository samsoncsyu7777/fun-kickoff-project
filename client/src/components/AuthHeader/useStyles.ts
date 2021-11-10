import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    height: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: 45,
    marginLeft: 'auto',
  },
  accAside: {
    fontSize: 11,
    color: custom.colors.black,
    fontWeight: 700,
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
