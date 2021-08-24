import { runInAction, toJS } from 'mobx';
import { loadCustomerList } from '../api/customer';
import { makeAutoObservable } from "mobx"
import { loadOperationListReq } from '../api/operation';
import CustomerStore, { ICustomerEntity } from '../customer/CustomerStore';
import BankAccountStore from '../bankAccount/BankAccountStore';
import { loadBankAccountList } from '../api/bankAccount';

export interface IOperationEntity {
    id: number | string;
    customerId: number | string;
    bankAccountId: number | string;
    value: number;
}

export class OperationStore {
    items: IOperationEntity[];
    totalCount: number;

    constructor() {
        makeAutoObservable(this)
        this.items = [];
        this.totalCount = 0;
    }

    async loadOperationList(queryParams: any) { 
        try {
            const response1 = await CustomerStore.loadCustomerList(queryParams) 
            if (!response1) return false

            const response2 = await BankAccountStore.loadBankAccountList()
            if (!response2) return false

            const response3 = await loadOperationListReq(queryParams)
            const res3 = await response3.json()

            if (response3.status === 200) {
                runInAction(() => {
                    this.items = res3.items
                    this.totalCount = res3.totalCount
                })
                return true
            }

            return false
        } catch (e) {
            console.log('e', e)
            return false
        }
    }
}

export default new OperationStore();