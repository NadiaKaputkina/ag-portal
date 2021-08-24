import { Paper, TableContainer } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react'
import { useHistory } from 'react-router';
import { prepareUrl } from '../../helpers/queryHelper';
import { useStore } from '../../store';
import { ICustomerEntity } from '../CustomerStore';
import BaseTablePagination from './BaseTablePagination';
import CustomerTable from './CustomerTable';

const BaseTableContainer = observer((props: any) => {
    const {
        queryParams,
    } = props

    let history = useHistory()
    const { CustomerStore } = useStore();
   
    const replaceUrl = (orderBy: Object[]) => {
        let newUrl = prepareUrl('/customer/list', 
            { ...queryParams, orderBy })
        history.push(newUrl)
    };
    const handleRowClick = (id: number) => (e: any) => {
        history.push(`/customer/${id}/item`)
    }
    const handleIsEnabledButton = (customer: ICustomerEntity, queryParams: any) => (e: any) => {
        const updatedCustomer: ICustomerEntity = { ...customer, isEnable: customer.isEnable ? 0 : 1} 
        const message: string = 'Статус успешно обновлен';

        CustomerStore.update(updatedCustomer, queryParams, message)
    }
    const handleOperationButton = (id: number) => (e: any) => {
        history.push(`/operation/list?customerId=${id}`)
    }
   
    const createSortHandler = (headCell: any) => (e: any): void => {
        let orderBy: Object[] = [...queryParams.orderBy]

        const orderByIndex: number = orderBy.findIndex((order: any) => order.column === headCell.column);
        
        if (orderByIndex === -1) {
            orderBy.push({ column: headCell.column })
            replaceUrl(orderBy)
            return
        }
       
        const orderItem: any = orderBy[orderByIndex];
        
        (orderItem.order) ?
            orderBy.splice(orderByIndex, 1) :
            orderBy[orderByIndex] = { ...orderItem, order: 'desc' }
    
        replaceUrl(orderBy)
    };
    
    return (
        <TableContainer component={Paper}>
            <CustomerTable 
                queryParams={queryParams}
                store={CustomerStore}
                handleRowClick={handleRowClick}
                handleIsEnabledButton={handleIsEnabledButton}
                handleOperationButton={handleOperationButton}
                createSortHandler={createSortHandler}
            />
            <BaseTablePagination queryParams={queryParams} />
        </TableContainer>
    )
})

export default BaseTableContainer;