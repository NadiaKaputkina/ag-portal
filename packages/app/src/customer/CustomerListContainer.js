import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerListAction } from './customerAction';
import { customerListSelector } from './customerSelectors';
import CustomerTable from './CustomerTable';

const CustomerContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)

    useEffect(() => {
        dispatch(loadCustomerListAction())
    }, []);

    return (
        <CustomerTable customerList={customerList} />
    )
}

export default CustomerContainer;