import { prepareUrl } from "../helpers/queryHelper"
const baseApiUrl = 'http://localhost:5000'

export const loadOperationList = (queryParams) => {
    let url = prepareUrl(`${baseApiUrl}/operation/list`, queryParams)

    return fetch(url)
}