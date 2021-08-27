import React from 'react'
import {
    TableCell,
} from "@material-ui/core";
import { observer } from 'mobx-react';


const CustomerFullNameCell = observer((props: any) => {
    const {
        customer
    } = props

    if (!customer) return null

    return <TableCell scope="row">{customer.getFullName()}</TableCell>
})

export default CustomerFullNameCell;