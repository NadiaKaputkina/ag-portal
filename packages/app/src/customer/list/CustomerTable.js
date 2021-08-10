import React from 'react'
import {
    TableCell,
    Paper,
    TableRow,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    IconButton,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { DEFAULT_STYLES, useDefaultStyles } from "../../shared/styles/rootStyles";
import TableCellStatus from './TableCellStatus';

const CustomerTable = (props) => {
    const {
        customerList,
        handleRowClick,
        handleDeleteButton,
        handleOperationButton,
    } = props;

    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            variant="head"
                        >
                            <span>{111}</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>{222}</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>{333}</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>Status</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>Платежи</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                            align="right"
                        >
                            <span>Actions</span>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customerList.map((customer) => (
                        <TableRow key={`customer_${customer.id}`}>
                            <TableCell component="th" scope="row" onClick={handleRowClick(customer.id)}>{customer.id}</TableCell>
                            <TableCell component="th" scope="row" onClick={handleRowClick(customer.id)}>{customer.name}</TableCell>
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
                                    aria-label="add"
                                    onClick={handleDeleteButton(customer.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    onClick={handleDeleteButton(customer.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomerTable;