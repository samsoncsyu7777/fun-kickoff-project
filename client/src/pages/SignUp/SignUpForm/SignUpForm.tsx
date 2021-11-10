import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();
  const loginLink = '/login';

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Typography className={classes.label}>Email address</Typography>
          <TextField
            variant="outlined"
            color="secondary"
            id="email"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            placeholder="Your email"
            name="email"
            autoComplete="email"
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <Typography className={classes.label}>Name</Typography>
          <TextField
            variant="outlined"
            color="secondary"
            id="username"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            placeholder="Your name"
            name="username"
            autoComplete="username"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
          />
          <Typography className={classes.label}>Password</Typography>
          <TextField
            variant="outlined"
            color="secondary"
            id="password"
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            placeholder="Create a password"
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SIGN UP'}
            </Button>
          </Box>
          <Box textAlign="center" className={classes.loginBox}>
            <Typography className={classes.isMember}>Already a member?</Typography>
            <Link to={loginLink} className={classes.link}>
              <Typography className={classes.loginLink}>Login</Typography>
            </Link>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
