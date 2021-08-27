import { runInAction } from 'mobx';
import { makeAutoObservable } from "mobx"
import { loadBankAccountList } from '../api/bankAccount';
import { IQueryParams } from '../helpers/queryHelper';

export interface IBankAccountEntity {
    /** @todo переделать типы в единый тип, number*/
    id: number;
    bill: number;
    bankId: number;
    customerId: number;
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
    async loadBankAccountList(queryParams: IQueryParams) {
        try {
            const response = await loadBankAccountList(queryParams)
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