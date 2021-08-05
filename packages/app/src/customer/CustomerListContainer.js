import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router';
import { prepareQueryParams } from '../helpers/queryHelper';
import { loadCustomerListAction } from './customerAction';
import BaseTableContainer from './list/BaseTableContainer';
import BaseSearchContainer from './list/search/BaseSearchContainer';

const CustomerContainer = () => {
    let queryParams = prepareQueryParams(useLocation().search);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCustomerListAction(queryParams))
    }, [queryParams]);



    // const [queryParams, setQueryParams] = useState(startQueryParams)

    return (
        <>
            <BaseSearchContainer />
            <BaseTableContainer />
        </>
    )
}

export default CustomerContainer;