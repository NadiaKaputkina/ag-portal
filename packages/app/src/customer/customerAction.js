import { loadCustomerList } from "../api/customer"
import { CUSTOMER_LIST_LOAD_SUCCESS } from "./customerReducer"


export const loadCustomerAction = (payload) => {
    return async (dispatch) => {
        console.log('1')
        try {
            const response = await loadCustomerList()
            const res = await response.json()
            console.log('2', res)

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