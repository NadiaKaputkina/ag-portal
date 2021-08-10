import React from 'react'
import {
    Button,
    makeStyles,
    TextField
} from "@material-ui/core";
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import loginStyles from './loginStyles';

const useStyles = makeStyles(() => loginStyles)

const LoginForm = () => {
    const classes = useStyles();

    let history = useHistory()
    const handleLoginButton = () => {
        history.push('/customer/list')
    }

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values));
        },
    });
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    className={classes.loginFormInput}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    className={classes.loginFormInput}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    variant='contained'
                    color="primary"
                    type="submit"
                    className={classes.loginFormButton}
                    onClick={handleLoginButton}
                >
                    Sign in
                </Button>
            </form>
        </div>
    );  
}

export default LoginForm;