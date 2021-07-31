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

const OperationTable = (props) => {
    const {
        operationList,
        bankAccountList,
    } = props;

    return (
        <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>Id</span>
                            </TableCell>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>Customer Name</span>
                            </TableCell>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>Bill</span>
                            </TableCell>
                            <TableCell
                                component="div"
                                variant="head"
                            >
                                <span>Value</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {operationList.map((operation) => {
                            const bankAccount = bankAccountList.find(bankAccount => bankAccount.id === operation.bankAccountId)
                            
                            return (
                                <TableRow key={`operation_${operation.id}`}>
                                    <TableCell component="th" scope="row">{operation.id}</TableCell>
                                    <TableCell component="th" scope="row">{operation.name}</TableCell>
                                    <TableCell align="right">{bankAccount.bill}</TableCell>
                                    <TableCell align="right">{operation.value}</TableCell>
                                </TableRow>
                            )
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default OperationTable;