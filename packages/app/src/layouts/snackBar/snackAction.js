import {
    ERROR_MESSAGE_UPDATE,
    SNACK_MESSAGE_CLOSE
} from "./snackReducer";

export const snackShowAction = (message, severity, open) => {

    return (dispatch) => {
        return dispatch(snackAction({message, severity, open}))

    }
}

export const snackCloseAction = () => {
    return (dispatch) => {
        return dispatch({
            type: SNACK_MESSAGE_CLOSE,
            payload: false
        })

    }
}

export const snackAction = (payload) => ({
    type: ERROR_MESSAGE_UPDATE,
    payload
})