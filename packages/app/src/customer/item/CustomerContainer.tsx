import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import { useStore } from '../../store';
import CustomerForm from './CustomerForm';

const CustomerContainer = observer((props: any) => {
    const {
        id
     } = props;

    const { CustomerStore } = useStore();

    //const customer = CustomerStore.item.id !== null
    
    useEffect(() => {
        CustomerStore.loadCustomer(id)
        // CustomerStore.loadCustomerList({ customerId: id })
    }, []);

    return (
        <div>
            <CustomerForm store={CustomerStore}/>
        </div>
    )
})

export default CustomerContainer;