import { runInAction } from 'mobx';
import { deleteCustomerApi, loadCustomer, loadCustomerLastNameList, loadCustomerList, updateCustomerApi } from '../api/customer';
import { makeAutoObservable } from "mobx"
import SnackBarStore from '../layouts/snackBar/SnackBarStore';
import CustomerEntity, { ICustomerEntity } from './CustomerEntity';
import { plainToClass } from 'class-transformer';

export interface ICustomerLastNameList {
  id: number | string;
  lastName: string;
}

export class CustomerStore {
  item: CustomerEntity;
  items: CustomerEntity[];
  totalCount: number;
  lastNameList: ICustomerLastNameList[];

  constructor() {
    makeAutoObservable(this);
    // как это сделать?
    this.item = {
      id: null,
      firstName: '',
      lastName: '',
      age: null,
      isEnable: 1,
    };
    this.items = [];
    this.totalCount = 0;
    this.lastNameList = [];
  }

  async loadCustomerList(queryParams: any) {
    try {
      const res = await loadCustomerList(queryParams)

      runInAction(() => {
        this.items = res.items.map((item: any) => plainToClass(CustomerEntity, item));
        this.totalCount = res.totalCount
      })

      return true
    } catch (e) {
      console.log('e', e)
      return false
    }
  }

  async loadCustomersLastNameList() {
    try {
      const response = await loadCustomerLastNameList()
      const res = await response.json()

      if (response.status === 200) {
        runInAction(() => {
          this.lastNameList = res
        })
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  async loadCustomer(id: ICustomerEntity['id']) {
    try {
      const response = await loadCustomer(id)
      const res = await response.json()

      if (response.status === 200) {
        runInAction(() => {
          this.item = res
        })
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  async delete(id: ICustomerEntity['id'], queryParams: any) {
    try {
      const response = await deleteCustomerApi(id as number)

      if (response.status === 200) {
        this.loadCustomerList(queryParams)
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  async update(customer: ICustomerEntity, queryParams: any, message: string) {
    try {
      // const response = await api.post(updateCustomerApi(customer))
      const response = await updateCustomerApi(customer)

      if (response.status === 200) {
        SnackBarStore.open(message)
        this.loadCustomerList(queryParams)
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  findById(id: CustomerEntity['id']) {
    return this.items.find((item: CustomerEntity) => item.id === id)
  }

}

export default new CustomerStore();