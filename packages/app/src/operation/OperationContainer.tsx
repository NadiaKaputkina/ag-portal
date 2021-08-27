import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router';
import { prepareQueryParams } from '../helpers/queryHelper';
import BaseSearchContainer from './list/search/BaseSearchContainer';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { observer } from 'mobx-react';
import { useStore } from '../store';
import OperationTable from './OperationTable';

const OperationContainer = observer(() => {
    const { OperationStore } = useStore();

    let history = useHistory()
    const handleAddPaymentButton = (id: number) => (e: any) => {
        history.push(`/operation/list?customerId=${id}`)
    }

    let queryParams = prepareQueryParams(useLocation().search);
    // const queryParamsStr = JSON.stringify(queryParams);

    useEffect(() => {
        OperationStore.loadOperationList(queryParams)
    }, []);

    return (
        <>
            <BaseSearchContainer queryParams={queryParams}/>
            {/* <Button
                color="primary"
                onClick={handleAddPaymentButton}
            >
                <AddBoxIcon />
                Новый платеж
            </Button> */}
            <OperationTable />
        </>
    )
})

export default OperationContainer;