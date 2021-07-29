import React from 'react'
import {
    Button,
} from "@material-ui/core";
import { useHistory } from 'react-router';

const LoginForm = () => {
    let history = useHistory()

    const handleLoginButton = () => {
        history.push('/customer/list')
    }

    return (
        <Button
            variant='contained'
            color="primary"
            onClick={handleLoginButton}
        >
            Sign in
        </Button>
    )
}

export default LoginForm;