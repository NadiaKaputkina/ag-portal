export const CUSTOMER_LIST_LOAD_SUCCESS = 'CUSTOMER_LIST_LOAD_SUCCESS'
export const CUSTOMER_LIST_LOAD_COUNT = 'CUSTOMER_LIST_LOAD_COUNT'

const initialState = {
    items: [],
    totalCount: null,
}

export function customerReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CUSTOMER_LIST_LOAD_SUCCESS:
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