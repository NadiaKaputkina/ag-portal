export const CUSTOMER_LIST_LOAD_SUCCESS = 'CUSTOMER_LIST_LOAD_SUCCESS'
export const CUSTOMER_LOAD_SUCCESS = 'CUSTOMER_LOAD_SUCCESS'
export const CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_UPDATE_SUCCESS'

const initialState = {
    items: [],
    totalCount: 100,
    item: {},
}

export function customerReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CUSTOMER_LIST_LOAD_SUCCESS:
            return {
                ...payload,
                // totalCount: payload.length,
            }
        
        case CUSTOMER_LOAD_SUCCESS:
            return {
                ...payload,
            }

        default:
            return state
    }
}