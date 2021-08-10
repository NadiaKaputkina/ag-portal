import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router';
import { bankAccountListSelector } from '../bankAccount/bankAccountSelectors';
import { customerListSelector } from '../customer/customerSelectors';
import { prepareQueryParams } from '../helpers/queryHelper';
import BaseSearchContainer from './list/search/BaseSearchContainer';
import { loadOperationAction } from './operationAction';
import { operationListSelector } from './operationSelectors';
import OperationTable from './OperationTable';

const OperationContainer = () => {
    const dispatch = useDispatch()
    const customerList = useSelector(customerListSelector)
    const operationList = useSelector(operationListSelector)
    const bankAccountList = useSelector(bankAccountListSelector)

    let queryParams = prepareQueryParams(useLocation().search);
    const queryParamsStr = JSON.stringify(queryParams);

    useEffect(() => {
        dispatch(loadOperationAction(queryParams))
    }, [queryParamsStr]);

    return (
        <>
            <BaseSearchContainer customerList={customerList    }/>
            <OperationTable operationList={operationList} bankAccountList={bankAccountList} />
        </>
    )
}

export default OperationContainer;