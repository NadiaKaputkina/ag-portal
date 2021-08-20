import React from 'react'
import { useStore } from '../../store';
import MainSnackBar from './MainSnackBar';

const SnackBarContainer = () => {
    const { SnackBarStore } = useStore();

    const handleClose = () => {
       SnackBarStore.close()
    }

    return (
        <MainSnackBar
            store={SnackBarStore}
            handleClose={handleClose}
        />
    )
}

export default SnackBarContainer