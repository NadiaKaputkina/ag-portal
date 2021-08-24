import { IQueryParams, prepareUrl } from "../helpers/queryHelper"
const baseApiUrl = 'http://localhost:5000'

export const loadOperationListReq = (queryParams: IQueryParams) => {
    let url = prepareUrl(`${baseApiUrl}/operation/list`, queryParams)

    return fetch(url)
}