import { yellow } from "@material-ui/core/colors";

const appBarStyles = {
    appBar: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: yellow['A200'],
        boxShadow: '0 5px 10px 0 lightgray',
        borderRadius: '5px',
    },
    toolbar: {
        backgroundColor: 'transparent',
    },
}

export default appBarStyles;