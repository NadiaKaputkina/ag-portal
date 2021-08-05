import { prepareUrl } from "../helpers/queryHelper"
const baseApiUrl = 'http://localhost:5000'

export const loadCustomerList = (queryParams) => {
    let url = prepareUrl(`${baseApiUrl}/customer/list`, queryParams)

    return fetch(url)
}

export const loadCustomer = (id) => {
    return fetch(`http://localhost:5000/customer/${id}`)
}

export const updateCustomerApi = (formData) => {
    return fetch(`http://localhost:5000/customer/${formData.id}/update`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const deleteCustomerApi = (id) => {
    return fetch(`http://localhost:5000/customer/${id}/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}