import api from "."
import { ICustomerEntity } from "../customer/CustomerEntity"
import { IQueryParams, prepareUrl } from "../helpers/queryHelper"
const baseApiUrl = 'http://localhost:5000'

export const loadCustomerList = (queryParams: IQueryParams) => {
    let url = prepareUrl(`${baseApiUrl}/customer/list`, queryParams)

    return api.GET(url)
}

export const loadCustomerLastNameList = () => {
    return fetch(`${baseApiUrl}/customer/lastNameList`)
}

export const loadCustomer = (id: any) => {
    return fetch(`${baseApiUrl}/customer/${id}`)
}

export const updateCustomerApi = (formData: ICustomerEntity) => {
    return fetch(`${baseApiUrl}/customer/${formData.id}/update`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const deleteCustomerApi = (id: number) => {
    return fetch(`${baseApiUrl}/customer/${id}/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}