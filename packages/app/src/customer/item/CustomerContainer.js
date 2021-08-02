import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerListAction } from '../customerAction';
import { customerSelector } from '../customerSelectors';
// import { loadCustomerAction } from '../customerAction';
import CustomerForm from './CustomerForm';


const CustomerContainer = (props) => {
    const {
        id
     } = props;

    const dispatch = useDispatch()
    const customer = useSelector(customerSelector(id))
    
    useEffect(() => {
        if (!customer) {
            dispatch(loadCustomerListAction())
        }
    }, [customer]);

    return (
        <CustomerForm customer={customer} />
    )
}

export default CustomerContainer;