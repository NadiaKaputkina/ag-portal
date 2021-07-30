import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerAction } from './customerAction';
import { customerListSelector } from './customerSelectors';
import CustomerTable from './CustomerTable';

const CustomerContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)

    useEffect(() => {
        dispatch(loadCustomerAction())
    }, []);

    return (
        <CustomerTable customerList={customerList} />
    )
}

export default CustomerContainer;