import { createTheme } from "@material-ui/core";
import { deepPurple, amber, yellow } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: yellow[500],
        },
        secondary: {
            main: amber[500],
            contrastText: deepPurple[900],
        }
    }
})
