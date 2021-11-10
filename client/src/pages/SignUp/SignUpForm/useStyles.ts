import { makeStyles } from '@material-ui/core/styles';
import { custom } from '../../../themes/custom';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 11,
    fontWeight: 600,
    color: custom.colors.black,
    paddingLeft: '5px',
    marginTop: '18px',
    marginLeft: -theme.shape.borderRadius,
    lineHeight: '0px',
    textTransform: 'uppercase',
  },
  inputs: {
    height: 43,
    fontSize: 15,
    padding: '4px 18px 4px 18px',
  },
  forgot: {
    paddingRight: 10,
    color: custom.colors.red,
  },
  submit: {
    padding: 10,
    width: 130,
    height: 44,
    borderRadius: theme.shape.borderRadius,
    margin: '40px 0px 45px 0px',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: 'none',
  },
  loginBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  isMember: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  loginLink: {
    fontSize: 13,
    color: custom.colors.red,
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginLeft: 5,
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
