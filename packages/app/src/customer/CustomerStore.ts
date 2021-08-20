import { runInAction, toJS } from 'mobx';
import { deleteCustomerApi, loadCustomerList } from '../api/customer';
import { makeAutoObservable } from "mobx"

export interface ICustomerEntity {
  id: number | string;
  firstName: string;
  lastName: string;
  age: number;
  isEnable: number;
}

export class CustomerStore {
  items: ICustomerEntity[];
  totalCount: number;

  constructor() {
    makeAutoObservable(this)
    this.items = [];
    this.totalCount = 0;
  }

  async loadCustomerList(queryParams: any) {
    try {
      const response = await loadCustomerList(queryParams)
      const res = await response.json()

      if (response.status === 200) {
        runInAction(() => {
          this.items = res.items
          this.totalCount = res.totalCount
        })
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  async delete(id: ICustomerEntity['id'], queryParams: any) {
    try {
      const response = await deleteCustomerApi(id)
    
      if (response.status === 200) {
        this.loadCustomerList(queryParams)
      }
    } catch (e) {
      console.log('e', e)
    }
  }

}

export default new CustomerStore();