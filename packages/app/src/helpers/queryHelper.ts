export type stateOrderByItemType = {
    column: string,
    order: string
}
export type stateOrderByType = stateOrderByItemType[]

export interface IOrderByItem {
    column: string,
    order?: 'asc' | 'desc',
}

// export type queryParamsType = {
//     q: string,
//     page: number,
//     limit: number,
//     customerId: number | null,
//     isEnable: null | '',
//     orderBy: IOrderByItem[]
// }
export interface IQueryParams {
    [index: string]: any,
    orderBy: Object[]
}

// type defaultQueryParamsType = {
//     q: string,
//     page: number,
//     limit: number,
//     customerId: (number | null),
//     isEnable: 'enabled' | '',
//     orderBy: IOrderByItem[]
// }
const defaultQueryParams: IQueryParams = {
    q: '',
    page: 1,
    limit: 5,
    customerId: null,
    isEnable: 'enabled',
    orderBy: []
}

export const prepareQueryParams = (locationSearch: string) => {
    const query: any = new URLSearchParams(locationSearch);

    return {
        q: query.get("q") || defaultQueryParams.q,
        page: query.get("page") === null ? defaultQueryParams.page : parseInt(query.get("page")),
        limit: query.get("limit") === null ? defaultQueryParams.limit : parseInt(query.get("limit")),
        customerId: query.get("customerId") === null ? defaultQueryParams.customerId : query.get("customerId"),
        isEnable: query.get("isEnable") === null ? defaultQueryParams.isEnable : query.get("isEnable"),
        orderBy: query.get("orderBy") === null ? defaultQueryParams.orderBy : JSON.parse(query.get("orderBy")),
    }
}

export const prepareUrl = (url: string, queryParams: IQueryParams): string => {
    if (!queryParams) return url;

    let newUrl = url;
    const newSearchParams = new URLSearchParams();

    if (JSON.stringify(defaultQueryParams) !== JSON.stringify(queryParams)) {
        (Object.keys(queryParams) as Array<keyof IQueryParams>)
            .forEach((key) => {
                const currentParam = queryParams[key]
                if (JSON.stringify(currentParam) !== JSON.stringify(defaultQueryParams[key]) && currentParam !== null) {
                    if (Array.isArray(currentParam) && currentParam.length) {
                        newSearchParams.append(key as string, JSON.stringify(currentParam))
                        return
                    }
                    
                    newSearchParams.append(key as string, queryParams[key] as string)
                }
            })

        newUrl += '?' + newSearchParams.toString()
    }

    return newUrl
}