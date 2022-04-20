import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            dark: colors.indigo['A700'],
            main: colors.indigo['A400'],
            light: colors.indigo['A200']
        },
        secondary: {
            dark: colors.orange['A700'],
            main: colors.orange['A700'],
            light: colors.orange['A200']
        }
    },
    typography: {
        h6: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0,05'
        }
    }
});

export default theme;