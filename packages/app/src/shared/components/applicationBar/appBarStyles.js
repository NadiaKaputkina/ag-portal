import { yellow } from "@material-ui/core/colors";

const appBarStyles = {
    appBar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: yellow['A200'],
        boxShadow: '0 5px 10px 0 lightgray',
        borderRadius: '5px',
        padding: '0 30px',
    },
    toolbar: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },
}

export default appBarStyles;