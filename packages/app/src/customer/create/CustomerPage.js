import React from 'react'
import { useParams } from 'react-router';
import MainLayout from "../../layouts/MainLayout";
import CustomerContainer from './CustomerContainer';

const CustomerPage = () => {
    let { id } = useParams();
   
    return (
        <MainLayout>
            <CustomerContainer id={id}/>
        </MainLayout>
    )
}

export default CustomerPage;