import { combineReducers } from 'redux';
import { bankAccountReducer } from './bankAccount/bankAccountReducer';
import { customerReducer } from './customer/customerReducer';
import { operationReducer } from './operation/operationReducer';

export default combineReducers({
    customer: customerReducer,
    operation: operationReducer,
    bankAccount: bankAccountReducer,
});