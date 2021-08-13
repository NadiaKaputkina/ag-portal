import { yellow } from "@material-ui/core/colors";

const loginStyles = {
    loginForm: {
        padding: '30px 20px',
        display: 'flex',
        minHeight: '100px',
        width: '300px',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: yellow['A200'],
        boxShadow: '0 10px 30px 0 lightgray',
        borderRadius: '5px',
    },
    loginFormInput: {
        margin: '10px 0',
        backgroundColor: '#fff'
    },
    loginFormButton: {
        marginTop: '30px',
        height: '50px'
    }
}

export default loginStyles;