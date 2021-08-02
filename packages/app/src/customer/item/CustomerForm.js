import React from 'react'

const CustomerForm = (props) => {
    const {
        customer
    } = props;
    
    return (
        <div>{ JSON.stringify(customer) }</div>
    )
}

export default CustomerForm;