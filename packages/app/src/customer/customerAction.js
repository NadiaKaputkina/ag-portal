import { loadCustomerList, loadCustomer, updateCustomerApi, deleteCustomerApi } from "../api/customer"
import { snackShowAction } from "../layouts/snackBar/snackAction"
import {
    CUSTOMER_LIST_LOAD_SUCCESS,
    CUSTOMER_LOAD_SUCCESS,
} from "./customerReducer"


export const loadCustomerListAction = (queryParams) => {
    return async (dispatch) => {
        try {
            const response = await loadCustomerList(queryParams)
            const res = await response.json()

            if (response.status === 200) {
                dispatch({
                    type: CUSTOMER_LIST_LOAD_SUCCESS,
                    payload: res
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
            const response = await loadCustomer()
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

export const updateCustomerAction = (formData) => {
    return async (dispatch) => {
        try {
            const response = await updateCustomerApi(formData)

            if (response.status === 200) {
                dispatch(snackShowAction('Успешно', 'success', true))
            }
        } catch (e) {
            console.log('e', e)
            dispatch(snackShowAction(e, 'error', true))
        }
    }
}

export const deleteCustomerAction = (id) => {
    return async (dispatch) => {
        try {
            const response = await deleteCustomerApi(id)

            if (response.status === 200) {
                dispatch(snackShowAction('Успешно', 'success', true))
                dispatch(loadCustomerListAction())
            }
        } catch (e) {
            console.log('e', e)
            dispatch(snackShowAction(e, 'error', true))
        }
    }
}