import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Home from "./pages/home/HomePage";
import LoginPage from "./login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import CustomerListPage from './customer/CustomerListPage';
import OperationListPage from './operation/OperationListPage';
import CustomerPage from './customer/item/CustomerPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <Route path="/registration" component={RegistrationPage}/>
        {/* <Route path="/home" component={Home}/> */}
        <Route path="/customer/list" component={CustomerListPage} exact={true}/>
        <Route path="/customer/:id" component={CustomerPage}/>
        <Route path="/customer/new" component={Home}/>
        <Route path="/operation/list" component={OperationListPage}/>
        <Route path="/payment/:id" component={Home}/>
        <Route path="/payment/new" component={Home}/>
        <Route path="/" render={() => <Redirect to="/login"/>} exact={true}/>
      </Switch>
    </BrowserRouter>
  );
}

