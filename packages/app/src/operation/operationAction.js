import { loadBankAccountList } from "../api/bankAccount"
import { loadOperationList } from "../api/operation"
import { BANK_ACCOUNT_LIST_LOAD_SUCCESS } from "../bankAccount/bankAccountReducer"
import { OPERATION_LIST_LOAD_SUCCESS } from "./operationReducer"


export const loadOperationAction = (payload) => {
    return async (dispatch) => {
        console.log('1')
        try {
            const response1 = await loadBankAccountList()
            const res1 = await response1.json()

            if (res1.length) {
                dispatch({
                    type: BANK_ACCOUNT_LIST_LOAD_SUCCESS,
                    payload: {items: res1, totalCount: 0}
                })
            } else {
                return false;
            }

            const response2 = await loadOperationList()
            const res2 = await response2.json()
           
            if (res2.length) {
                dispatch({
                    type: OPERATION_LIST_LOAD_SUCCESS,
                    payload: {items: res2, totalCount: 0}
                })
            }
        } catch (e) {
            console.log('e', e)
        }
    }
}