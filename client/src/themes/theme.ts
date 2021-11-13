import { createMuiTheme } from '@material-ui/core';
import { custom } from './custom';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Arial"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 11,
      '@media (min-width: 600px)': {
        fontSize: 13,
      },
    },
    h5: {
      fontWeight: 'bold',
      fontSize: 9,
      '@media (min-width: 600px)': {
        fontSize: 11,
      },
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: custom.colors.red },
  },
  shape: {
    borderRadius: 5,
  },
});
