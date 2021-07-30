import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
} from 'react-router-dom'

import Home from "./pages/home/HomePage";
import LoginPage from "./login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import CustomerListPage from './customer/CustomerListPage';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage}/>
      <Route path="/registration" component={RegistrationPage}/>
      {/* <Route path="/home" component={Home}/> */}
      <Route path="/customer/list" component={CustomerListPage}/>
      <Route path="/customer/:id" component={Home}/>
      <Route path="/customer/new" component={Home}/>
      <Route path="/paymants" component={Home}/>
      <Route path="/payment/:id" component={Home}/>
      <Route path="/payment/new" component={Home}/>
      <Route path="/" render={() => <Redirect to="/login"/>} exact={true}/>
    </BrowserRouter>
  );
}

