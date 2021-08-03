export const loadCustomerList = () => {
    return fetch('http://localhost:5000/customer/list')
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