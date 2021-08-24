import { runInAction } from 'mobx';
import { makeAutoObservable } from "mobx"
import { loadBankAccountList } from '../api/bankAccount';

export interface IBankAccountEntity {
    /** @todo переделать типы в единый тип, number*/
    id: number | string;
    bill: number | string;
    bankId: number | string;
    customerId: number | string;
}

export class BankAccountStore {
    items: IBankAccountEntity[];
    totalCount: number;

    constructor() {
        makeAutoObservable(this)
        this.items = [];
        this.totalCount = 0;
    }
    /** @todo передать queryParams */
    async loadBankAccountList() {
        try {
            const response = await loadBankAccountList()
            const res = await response.json()

            if (response.status === 200) {
                runInAction(() => {
                    this.items = res.items
                    this.totalCount = res.totalCount
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

export default new BankAccountStore();