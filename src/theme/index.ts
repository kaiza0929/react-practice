import { createTheme, colors } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.red[800]
        },
        secondary: {
            main: colors.yellow[700]
        }
    },
    typography: {
        fontSize: 18
    }
});