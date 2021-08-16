import { runInAction } from 'mobx';
import { loadCustomerList } from '../api/customer';
import { makeAutoObservable } from "mobx"

class CustomerStore {
  show: boolean;
  items: Object[];
  totalCount: number;

  constructor() {
    makeAutoObservable(this)
    this.show = true;
    this.items = [];
    this.totalCount = 0;
  }

  async loadCustomerList(queryParams: any) {
    try {
      const response = await loadCustomerList(queryParams)
      const res = await response.json()

      if (response.status === 200) {
        runInAction(() => {
          console.log('runInAction')
          this.items = res.items
          this.totalCount = res.totalCount
        })
      }
    } catch (e) {
      console.log('e', e)
    }
  }

  hide() {
    this.show = false
  }
}

export default new CustomerStore();