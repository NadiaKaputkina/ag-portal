const defaultQueryParams = {
    q: '',
    page: 1,
    limit: 5,
    sort: null,
    order: null,
    customerId: null,
    status: 'enabled',
}

export const prepareQueryParams = (locationSearch) => {
    const query = new URLSearchParams(locationSearch);

    return {
        q: query.get("q") || defaultQueryParams.q,
        page: query.get("page") === null ? defaultQueryParams.page : parseInt(query.get("page")),
        limit: query.get("limit") === null ? defaultQueryParams.limit : parseInt(query.get("limit")),
        sort: query.get("sort") === null ? defaultQueryParams.sort : query.get("sort"),
        order: query.get("order") === null ? defaultQueryParams.order : query.get("order"),
        customerId: query.get("customerId") === null ? defaultQueryParams.customerId : query.get("customerId"),
        status: query.get("status") === null ? defaultQueryParams.status : query.get("status"),
    }
}

export const prepareUrl = (url, queryParams) => {
    if (!queryParams) return url;
    
    let newUrl = url;
    const newSearchParams = new URLSearchParams();

    if (JSON.stringify(defaultQueryParams) !== JSON.stringify(queryParams)) {
        Object.keys(queryParams)
            .forEach((key) => {
                if (queryParams[key] !== defaultQueryParams[key] && queryParams[key] !== null) {
                    newSearchParams.append(key, queryParams[key])
                }
            })
        newUrl += '?' + newSearchParams.toString()
    }

    return newUrl
}