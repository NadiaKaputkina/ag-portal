import { loadBankAccountList } from "../api/bankAccount"
import { loadCustomerList } from "../api/customer"
import { loadOperationList } from "../api/operation"
import { BANK_ACCOUNT_LIST_LOAD_SUCCESS } from "../bankAccount/bankAccountReducer"
import { CUSTOMER_LIST_LOAD_SUCCESS } from "../customer/customerReducer"
import { OPERATION_LIST_LOAD_SUCCESS } from "./operationReducer"


export const loadOperationAction = (queryParams) => {
    return async (dispatch) => {
        try {
            const response1 = await loadCustomerList({})
            const res1 = await response1.json()
 
            const response2 = await loadBankAccountList(queryParams)
            const res2 = await response2.json()

            const response3 = await loadOperationList(queryParams)
            const res3 = await response3.json()
 
            if (res1.length) {
                dispatch({
                    type: CUSTOMER_LIST_LOAD_SUCCESS,
                    payload: {items: res1, totalCount: 0}
                })
            } else {
                return false;
            }

            if (res2.length) {
                dispatch({
                    type: BANK_ACCOUNT_LIST_LOAD_SUCCESS,
                    payload: {items: res2, totalCount: 0}
                })
            } else {
                return false;
            }

            if (res3.length) {
                dispatch({
                    type: OPERATION_LIST_LOAD_SUCCESS,
                    payload: {items: res3, totalCount: 0}
                })
            }

            
        } catch (e) {
            console.log('e', e)
        }
    }
}