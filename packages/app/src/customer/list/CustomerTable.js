import React from 'react'
import {
    TableCell,
    TableRow,
    Table,
    TableBody,
    IconButton,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ReplayIcon from '@material-ui/icons/Replay';

import { DEFAULT_STYLES, useDefaultStyles } from "../../shared/styles/rootStyles";
import TableCellStatus from './TableCellStatus';
import EnhancedTableHead from './EnhancedTableHead';
import { observer } from 'mobx-react';

const CustomerTable = observer((props) => {
    const {
        store,
        handleRowClick,
        handleIsEnabledButton,
        handleOperationButton,
        queryParams,
        createSortHandler,
    } = props;
    
    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <Table className={classes.table} size="small" aria-label="customized table">
            <EnhancedTableHead
              classes={classes}
              queryParams={queryParams}
              createSortHandler={createSortHandler}
            />
            <TableBody>
                {store.items.map((customer) => (
                    <TableRow key={`customer_${customer.id}`}>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.id}</TableCell>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.lastName}</TableCell>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.firstName}</TableCell>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.age}</TableCell>
                        <TableCellStatus customer={customer} handleRowClick={handleRowClick} />
                        <TableCell>
                            <IconButton
                                aria-label="operation"
                                onClick={handleOperationButton(customer.id)}
                            >
                                <ReceiptIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton
                                aria-label="actions"
                                color="primary"
                                onClick={handleIsEnabledButton(customer, queryParams)}
                            >
                                { customer.isEnable ? <DeleteIcon /> : <ReplayIcon /> }
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
})

export default CustomerTable;