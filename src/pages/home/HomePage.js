import React from 'react'
import { Redirect } from 'react-router'

// import { DEFAULT_STYLES, useDefaultStyles } from "../../shared/styles/rootStyles";
// import MainLayout from "../../layouts/MainLayout";

const HomePage = () => {
    // const classes = useDefaultStyles(DEFAULT_STYLES);

    console.log('Home Page');
    
    return (<Redirect to="/customer/list"/>)
    // return (
        
    //     <MainLayout>
    //         <div className={classes.defaultPage}>
    //             Home

    //         </div>
    //     </MainLayout>
    // )
}

export default HomePage;