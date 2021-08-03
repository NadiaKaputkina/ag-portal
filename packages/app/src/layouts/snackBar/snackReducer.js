export const ERROR_MESSAGE_UPDATE = 'ERROR_MESSAGE_UPDATE'
export const SNACK_MESSAGE_CLOSE = 'SNACK_MESSAGE_CLOSE'

const initialState = {
    open: false
};

export function snackReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ERROR_MESSAGE_UPDATE:
            return {
                ...state,
                message: payload.message,
                severity: payload.severity,
                open: payload.open,
            }

        case SNACK_MESSAGE_CLOSE:
            return {
                ...state,
                open: payload,
            }
        default:
            return state
    }
}