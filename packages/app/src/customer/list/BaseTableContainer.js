import { Paper, TableContainer } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react'
import { useHistory } from 'react-router';
//import { deleteCustomerAction } from '../customerAction';
//import { customerListSelector } from '../customerSelectors';
import BaseTablePagination from './BaseTablePagination';
import CustomerTable from './CustomerTable';

const BaseTableContainer = observer((props) => {
    const {
        queryParams,
        customerList
    } = props

    // const dispatch = useDispatch()
    // const customerList = useSelector(customerListSelector)

    let history = useHistory()

    const handleRowClick = (id) => (e) => {
        history.push(`/customer/${id}/item`)
    }
    const handleDeleteButton = (id) => (e) => {
        // dispatch(deleteCustomerAction(id))
    }
    const handleOperationButton = (id) => (e) => {
        history.push(`/operation/list?customerId=${id}`)
    }
   
    return (
        <TableContainer component={Paper}>
            <CustomerTable 
                queryParams={queryParams}
                customerList={customerList}
                handleRowClick={handleRowClick}
                handleDeleteButton={handleDeleteButton}
                handleOperationButton={handleOperationButton}
            />
            <BaseTablePagination queryParams={queryParams} />
        </TableContainer>
    )
})

export default BaseTableContainer;