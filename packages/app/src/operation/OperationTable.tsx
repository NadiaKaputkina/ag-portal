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
import { observer } from 'mobx-react';
import { IBankAccountEntity } from '../bankAccount/BankAccountStore';
import { IOperationEntity } from './OperationStore';
import { useStore } from '../store';
import CustomerFullNameCell from './CustomerFullNameCell';

const OperationTable = observer(() => {
    const { OperationStore, BankAccountStore, CustomerStore } = useStore();

    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            variant="head"
                        >
                            <span>Id</span>
                        </TableCell>
                        <TableCell 
                        variant="head"
                        >
                            <span>Customer Name</span>
                            </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>Bill</span>
                        </TableCell>
                        <TableCell
                            variant="head"
                        >
                            <span>Value</span>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {OperationStore.items.map((operation: IOperationEntity) => {
                        const bankAccount = BankAccountStore.items.find((bankAccount: IBankAccountEntity) => bankAccount.id === operation.bankAccountId)

                        const customer = CustomerStore.findById(operation.customerId)
                        
                        return (
                            <TableRow key={`operation_${operation.id}`}>
                                <TableCell scope="row">{operation.id}</TableCell>
                                <CustomerFullNameCell customer={customer} />
                                <TableCell>{bankAccount.bill}</TableCell>
                                <TableCell>{operation.value}</TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
})

export default OperationTable;