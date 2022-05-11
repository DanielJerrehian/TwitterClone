import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main:"#1DA1F2",
            // contrastText: "#fff"
        },
        secondary: {
            main:"#14171A",
        },
        common: {
            drawer: "#657786",
        },
        string: {
            main: "white"
        }
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 20,
            },
          }, 
        }, 
    },
});

export default theme