import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { deleteCustomerAction } from '../customerAction';
import { customerListSelector } from '../customerSelectors';
import CustomerTable from './CustomerTable';

const BaseTableContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)

    let history = useHistory()

    const handleRowClick = (id) => (e) => {
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

export default BaseTableContainer;