import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../themes/custom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'center',
  },
  elevationGrid: {
    height: '76vh',
    minHeight: 500,
    margin: '6vh 0 8vh 0',
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: custom.colors.white,
    boxShadow: 'none',
  },
  authWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100vw',
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 15,
    color: custom.colors.black,
    fontWeight: 800,
    fontFamily: "'Roboto'",
    textAlign: 'center',
  },
}));

export default useStyles;
