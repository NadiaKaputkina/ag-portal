import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { bankAccountListSelector } from '../bankAccount/bankAccountSelectors';
import { loadOperationAction } from './operationAction';
import { operationListSelector } from './operationSelectors';
import OperationTable from './OperationTable';

const OperationContainer = () => {
    const dispatch = useDispatch()
    const operationList = useSelector(operationListSelector)
    const bankAccountList = useSelector(bankAccountListSelector)


    useEffect(() => {
        dispatch(loadOperationAction())
    }, []);

    return (
        <OperationTable operationList={operationList} bankAccountList={bankAccountList} />
    )
}

export default OperationContainer;