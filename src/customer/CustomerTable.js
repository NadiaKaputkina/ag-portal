import React from 'react'
import {
    TableCell,
    withStyles,
    makeStyles,
    Paper,
    TableRow,
    TableContainer,
    Table,
    TableBody,
    TableHead,
    IconButton,
    TablePagination,
    TableFooter,
} from "@material-ui/core";
import { DEFAULT_STYLES, useDefaultStyles } from "../shared/styles/rootStyles";
import MainLayout from "../layouts/MainLayout";

const customers = [{
    id: 1,
    name: 'Nadia',
    age: 35,
},
{
    id: 2,
    name: 'Olia',
    age: 36,
},
{
    id: 3,
    name: 'Misha',
    age: 2,
}]

const CustomerTable = () => {
    const classes = useDefaultStyles(DEFAULT_STYLES);

    return (
        <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>{111}</span>
                            </TableCell>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>{222}</span>
                            </TableCell>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>{333}</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={`customer_${customer.id}`}>
                                <TableCell component="th" scope="row">{customer.id}</TableCell>
                                <TableCell component="th" scope="row">{customer.name}</TableCell>
                                <TableCell align="right">{customer.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default CustomerTable;