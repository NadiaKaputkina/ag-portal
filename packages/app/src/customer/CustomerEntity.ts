// import { makeAutoObservable } from "mobx";
export interface ICustomerEntity {
    id: number | null;
    firstName: string;
    lastName: string;
    age: number | null;
    isEnable: number;
}


class CustomerEntity implements ICustomerEntity {
    id: number | null;
    firstName: string;
    lastName: string;
    age: number | null;
    isEnable: number;
    
    // constructor() {
    //     makeAutoObservable(this);
    // }

    getFullName?(): string {
      return this.firstName + ' ' + this.lastName;
    }
}

export default CustomerEntity