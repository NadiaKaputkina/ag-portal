import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { prepareQueryParams } from '../helpers/queryHelper';
import { observer } from 'mobx-react';
import BaseTableContainer from './list/BaseTableContainer';
import { useStore } from '../store';
import BaseSearchContainer from './list/search/BaseSearchContainer';

const CustomerListContainer = observer(() => {
    let queryParams = prepareQueryParams(useLocation().search);
    const { CustomerStore } = useStore();

    useEffect(() => {
        CustomerStore.loadCustomerList(queryParams)
    }, [JSON.stringify(queryParams)]);

    return (
        <>
            <BaseSearchContainer queryParams={queryParams}/>
            <BaseTableContainer customerList={CustomerStore.items} queryParams={queryParams}/>
        </>
    )
})

export default CustomerListContainer;