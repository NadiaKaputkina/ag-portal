import { loadCustomerList, loadCustomer } from "../api/customer"
import { CUSTOMER_LIST_LOAD_SUCCESS, CUSTOMER_LOAD_SUCCESS } from "./customerReducer"


export const loadCustomerListAction = () => {
    return async (dispatch) => {
        try {
            const response = await loadCustomerList()
            const res = await response.json()

            if (res.length) {
                dispatch({
                    type: CUSTOMER_LIST_LOAD_SUCCESS,
                    payload: {items: res, totalCount: 0}
                })
            }
        } catch (e) {
            console.log('e', e)
        }
    }
}

export const loadCustomerAction = () => {
    return async (dispatch) => {
        try {
            const response = await loadCustomer(1)
            const res = await response.json()

            if (res.length) {
                dispatch({
                    type: CUSTOMER_LOAD_SUCCESS,
                    payload: {item: res}
                })
            }
        } catch (e) {
            console.log('e', e)
        }
    }
}