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
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  const signupLink = '/signup';
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
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
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
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
              endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
            }}
            placeholder="Your password"
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" color="secondary" className={classes.submit}>
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'login'}
            </Button>
          </Box>
          <Box textAlign="center" display="flex" justifyContent="center">
            <Typography variant="h4">New member?</Typography>
            <Typography variant="h4" component={Link} to={signupLink} className={classes.signupLink}>
              Sign up
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
}
