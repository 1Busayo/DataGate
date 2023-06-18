import { createTheme ,ThemeProvider } from '@mui/material/styles';
import { green, grey, indigo } from '@mui/material/colors';

let hometheme = createTheme({
    typography: {
        fontFamily: [
          'Poppins',
          'sans-serif',
        ].join(','),
      },
});




export default hometheme;
