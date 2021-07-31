export const BANK_ACCOUNT_LIST_LOAD_SUCCESS = 'BANK_ACCOUNT_LIST_LOAD_SUCCESS'

const initialState = {
    items: [],
}

export function bankAccountReducer(state = initialState, {type, payload}) {
    switch (type) {
        case BANK_ACCOUNT_LIST_LOAD_SUCCESS:
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