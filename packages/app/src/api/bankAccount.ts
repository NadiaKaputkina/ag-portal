import { IQueryParams, prepareUrl } from "../helpers/queryHelper"
const baseApiUrl = 'http://localhost:5000'

export const loadBankAccountList = (queryParams: IQueryParams) => {
    let url = prepareUrl(`${baseApiUrl}/bankAccount/list`, queryParams)

    return fetch(url)
}
