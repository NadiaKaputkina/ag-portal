import React from 'react'
import MainLayout from "../layouts/MainLayout";
import CustomerListContainer from './CustomerListContainer';

const CustomerListPage = () => {
    return (
        <MainLayout>
            <CustomerListContainer />
        </MainLayout>
    )
}

export default CustomerListPage;