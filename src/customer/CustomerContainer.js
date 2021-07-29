import React from 'react'
import { DEFAULT_STYLES, useDefaultStyles } from "../shared/styles/rootStyles";
import CustomerTable from './CustomerTable';

const CustomerContainer = () => {
    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <CustomerTable />
    )
}

export default CustomerContainer;