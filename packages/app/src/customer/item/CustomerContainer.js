import React, { useEffect } from 'react'
import { loadCustomerListAction } from '../customerAction';
import { customerSelector } from '../customerSelectors';
// import { loadCustomerAction } from '../customerAction';
// import CustomerForm from './CustomerForm';


const CustomerContainer = (props) => {
    const {
        id
     } = props;

    // const dispatch = useDispatch()
    // const customer = useSelector(customerSelector(id))
    
    // useEffect(() => {
    //     if (!customer) {
    //         dispatch(loadCustomerListAction())
    //     }
    // }, [customer]);

    return (
        <div>
            {/* <CustomerForm customer={customer} /> */}
        </div>
    )
}

export default CustomerContainer;