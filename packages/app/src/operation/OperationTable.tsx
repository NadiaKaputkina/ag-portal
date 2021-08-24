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

const OperationTable = observer((props: any) => {
    const {
        queryParams,
    } = props

    const { OperationStore, BankAccountStore, CustomerStore } = useStore();

    const getCustomerName = (customerId: any) => {
        /** @todo неправильная логика */ 
        const customer = CustomerStore.findById(customerId)
        
        const customerFullName = customer ? `${customer.lastName} ${customer.firstName}` : ''

        return <TableCell scope="row">{customerFullName}</TableCell>
    }

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

                        return (
                            <TableRow key={`operation_${operation.id}`}>
                                <TableCell scope="row">{operation.id}</TableCell>
                                { getCustomerName(operation.customerId) }
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