import React from 'react'
import {
    TableCell,
} from "@material-ui/core";

const TableCellStatus = (props) => {
    const {
        customer,
        handleRowClick,
    } = props;

    return (
        <TableCell onClick={handleRowClick(customer.id)}>
            {customer.isEnable ? 'Active' : 'Disabled'}
        </TableCell>       
    )
}

export default TableCellStatus;