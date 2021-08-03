import React  from 'react'
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const MainSnackBar = (props) => {

    const {
        snack,
        handleClose
    } = props

    return (
        <Snackbar open={snack.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity={snack.severity}
            >
                {snack.message}
            </Alert>
        </Snackbar>
    )
}

export default MainSnackBar