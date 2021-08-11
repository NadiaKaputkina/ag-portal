import React from 'react'
import {
    TableCell,
    TableRow,
    Table,
    TableBody,
    TableHead,
    IconButton,
    withStyles,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { DEFAULT_STYLES, useDefaultStyles } from "../../shared/styles/rootStyles";
import TableCellStatus from './TableCellStatus';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.dark,
      fontSize: 12,
      textTransform: 'uppercase',
    },
  }))(TableCell);

const CustomerTable = (props) => {
    const {
        customerList,
        handleRowClick,
        handleDeleteButton,
        handleOperationButton,
        handleAddPaymentButton,
    } = props;

    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <Table className={classes.table} size="small" aria-label="customized table">
            <TableHead className={classes.thead}>
                <TableRow>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>N</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>Фамилия</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>Имя</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>Возраст</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>Статус</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                    >
                        <span>Платежи</span>
                    </StyledTableCell>
                    <StyledTableCell
                        variant="head"
                        align="right"
                    >
                        <span>Действия</span>
                    </StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {customerList.map((customer) => (
                    <TableRow key={`customer_${customer.id}`}>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.id}</TableCell>
                        <TableCell onClick={handleRowClick(customer.id)}>Фамилия</TableCell>
                        <TableCell onClick={handleRowClick(customer.id)}>{customer.name}</TableCell>
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
                                aria-label="addPayment"
                                color="secondary"
                                onClick={handleAddPaymentButton(customer.id)}
                            >
                                <AddBoxIcon />
                            </IconButton>
                            <IconButton
                                aria-label="delete"
                                color="primary"
                                onClick={handleDeleteButton(customer.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CustomerTable;