import React from 'react'
import {
    TableCell,
    Paper,
    TableRow,
    TableContainer,
    Table,
    TableBody,
    TableHead,
} from "@material-ui/core";
import { DEFAULT_STYLES, useDefaultStyles } from "../shared/styles/rootStyles";

const CustomerTable = (props) => {
    const {
        customerList
    } = props;

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
                        {customerList.map((customer) => (
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