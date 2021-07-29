import { combineReducers } from 'redux';
import { customerReducer } from './customer/customerReducer';

export default combineReducers({
    customer: customerReducer,
});