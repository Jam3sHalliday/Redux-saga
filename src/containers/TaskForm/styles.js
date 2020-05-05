const styles = theme => ({
    modal: {
        top: "50%",
        left: "50%",
        transform: 'translate(-50%,-50%)',

        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        // boxShadow: theme.shadow[5],
        padding: theme.spacing(2, 4, 4),
        outline: "none"
    },

    textField: {
        width: "100%",
        
    },
    header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title: {
        color: theme.color.textColor,
        fontWeight: 600,
        textTransform: 'capitalize',

    },
    icon: {
        cursor: "pointer",
        fontSize: 30,
    },

    theme: {
        padding: theme.spacing(2),
    }
});

export default styles;