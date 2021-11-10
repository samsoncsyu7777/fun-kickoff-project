import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles((theme) => ({
  authHeaderGrid: {
    display: 'flex',
    width: '100%',
    height: 70,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: custom.colors.white,
    boxShadow: 'none',
  },
  logoBox: {
    height: '100%',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  },
  logoImage: {
    height: '50%',
    marginLeft: 25,
  },
}));

export default useStyles;
