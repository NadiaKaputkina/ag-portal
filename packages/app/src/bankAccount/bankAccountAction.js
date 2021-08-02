import { loadBankAccountList } from "../api/bankAccount"
import { BANK_ACCOUNT_LIST_LOAD_SUCCESS } from "./bankAccountReducer"


export const loadBankAccountnAction = (payload) => {
    return async (dispatch) => {
        try {
            const response = await loadBankAccountList()
            const res = await response.json()

            if (res.length) {

                dispatch({
                    type: BANK_ACCOUNT_LIST_LOAD_SUCCESS,
                    payload: {items: res, totalCount: 0}
                })
            }
        } catch (e) {
            console.log('e', e)
        }
    }
}