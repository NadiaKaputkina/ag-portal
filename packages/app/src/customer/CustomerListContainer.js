import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { deleteCustomerAction, loadCustomerListAction } from './customerAction';
import { customerListSelector } from './customerSelectors';
import CustomerTable from './CustomerTable';

const CustomerContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)

    useEffect(() => {
        dispatch(loadCustomerListAction())
    }, []);

    let history = useHistory()

    const handleRowClick = (id) => (e) => {
        // dispatch(loadEmployeeAction(id))
        history.push(`/customer/${id}`)
    }
    const handleDeleteButton = (id) => (e) => {
        dispatch(deleteCustomerAction(id))
    }
    return (
        <CustomerTable 
            customerList={customerList}
            handleRowClick={handleRowClick}
            handleDeleteButton={handleDeleteButton}
        />
    )
}

export default CustomerContainer;