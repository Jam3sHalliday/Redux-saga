import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#1976d2",
        secondary: "#4791db",
        error: "#44336",
    },

    typoraphy: {
        fontFamily: "Roboto",
    },

    shape: {
        borderRadius: "#7b1fa2",
        textColor: "#fff",
        border: "#ccc",
    }
});

export default theme;