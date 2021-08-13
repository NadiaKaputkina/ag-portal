import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router';
import { bankAccountListSelector } from '../bankAccount/bankAccountSelectors';
import { customerListSelector } from '../customer/customerSelectors';
import { prepareQueryParams } from '../helpers/queryHelper';
import BaseSearchContainer from './list/search/BaseSearchContainer';
import { loadOperationAction } from './operationAction';
import { operationListSelector } from './operationSelectors';
import OperationTable from './OperationTable';
import AddBoxIcon from '@material-ui/icons/AddBox';

const OperationContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)
    const operationList = useSelector(operationListSelector)
    const bankAccountList = useSelector(bankAccountListSelector)

    let history = useHistory()
    const handleAddPaymentButton = (id) => (e) => {
        history.push(`/operation/list?customerId=${id}`)
    }

    let queryParams = prepareQueryParams(useLocation().search);
    const queryParamsStr = JSON.stringify(queryParams);

    useEffect(() => {
        dispatch(loadOperationAction(queryParams))
    }, [queryParamsStr]);

    return (
        <>
            <BaseSearchContainer customerList={customerList}/>
            <Button
                color="primary"
                onClick={handleAddPaymentButton}
            >
                <AddBoxIcon />
                Новый платеж
            </Button>
            <OperationTable operationList={operationList} bankAccountList={bankAccountList} />
        </>
    )
}

export default OperationContainer;