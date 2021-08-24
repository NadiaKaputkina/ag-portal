import React from 'react';
import CustomerStore from './customer/CustomerStore';
import OperationStore from './operation/OperationStore';
import BankAccountStore from './bankAccount/BankAccountStore';
import SnackBarStore from './layouts/snackBar/SnackBarStore';

const store = {
  CustomerStore,
  SnackBarStore,
  OperationStore,
  BankAccountStore,
}

/* Store helpers */
const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};

export default store