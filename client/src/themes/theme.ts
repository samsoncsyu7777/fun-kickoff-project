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
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: custom.colors.red },
  },
  shape: {
    borderRadius: 5,
  },
});