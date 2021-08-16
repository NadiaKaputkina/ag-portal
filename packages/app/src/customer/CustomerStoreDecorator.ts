import { action, observable, runInAction } from 'mobx';
import { loadCustomerList } from '../api/customer';

class CustomerStoreDecorator {
  @observable show: boolean;
  @observable items: Object[];
  @observable totalCount: number;

  constructor() {
    this.show = true;
    this.items = [];
    this.totalCount = 0;
  }

  @action
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

  @action
  hide() {
    this.show = false
  }
}

export default new CustomerStoreDecorator();