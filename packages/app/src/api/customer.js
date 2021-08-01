export const loadCustomerList = () => {
    return fetch('http://localhost:5000/customer/list')
}

export const loadCustomer = (id) => {
    return fetch(`http://localhost:5000/customer/${id}`)
}