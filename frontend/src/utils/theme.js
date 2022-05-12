import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main:"#1DA1F2",
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
    typography: {
        "fontFamily": `'Archivo', sans-serif`,
        "fontSize": 14,
    },
});

export default theme