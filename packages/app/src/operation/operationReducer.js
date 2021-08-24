export const OPERATION_LIST_LOAD_SUCCESS = 'OPERATION_LIST_LOAD_SUCCESS'

const initialState = {
    items: [],
}

export function operationReducer(state = initialState, {type, payload}) {
    switch (type) {
        case OPERATION_LIST_LOAD_SUCCESS:
            return {
                ...payload
            }
        //
        // case EMPLOYEES_LOAD_COUNT:
        //     return {
        //         ...state,
        //         totalCount: payload,
        //     }
        default:
            return state
    }
}