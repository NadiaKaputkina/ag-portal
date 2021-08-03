import React from 'react'
import MainSnackBar from "./MainSnackBar";
import { useDispatch, useSelector } from "react-redux";
import { selectSnack } from "./snackSelector";
import { snackCloseAction } from "./snackAction";

const SnackBarContainer = () => {

    let snack = useSelector(selectSnack)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(snackCloseAction())
    }
    return (
        <MainSnackBar
            snack={snack}
            handleClose={handleClose}
        />
    )
}

export default SnackBarContainer