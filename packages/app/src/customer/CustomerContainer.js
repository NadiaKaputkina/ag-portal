import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerAction } from './customerAction';
import CustomerForm from './CustomerForm';
import { customerSelector } from './customerSelectors';

const CustomerContainer = () => {
    const dispatch = useDispatch()
    const customer = useSelector(customerSelector)

    useEffect(() => {
        dispatch(loadCustomerAction())
    }, []);

    return (
        <CustomerForm customer={customer} />
    )
}

export default CustomerContainer;