import React, { FC }  from 'react'
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { SnackBarStore } from './SnackBarStore';

export interface MainSnackBarProps {
    store: SnackBarStore,
    handleClose: () => void
}

const MainSnackBar: FC<MainSnackBarProps> = (props) => {
    const {
        store,
        handleClose
    } = props

    return (
        <Snackbar open={store.isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity={store.severity}
            >
                {store.message}
            </Alert>
        </Snackbar>
    )
}

export default MainSnackBar