const defaultQueryParams = {
    q: '333',
    page: 1,
    limit: 5,
    sort: null,
    order: null
}

export const prepareQueryParams = (locationSearch) => {
    const query = new URLSearchParams(locationSearch);

    return {
        q: query.get("q") || defaultQueryParams.q,
        page: query.get("page") === null ? defaultQueryParams.page : parseInt(query.get("page")),
        limit: query.get("limit") === null ? defaultQueryParams.limit : parseInt(query.get("limit")),
        sort: query.get("sort") === null ? defaultQueryParams.sort : query.get("sort"),
        order: query.get("order") === null ? defaultQueryParams.order : query.get("order"),
    }
}

export const prepareUrl = (baseUrl, queryParams) => {
    let newUrl = baseUrl;
    const newSearchParams = new URLSearchParams();

    Object.keys(queryParams)
        .forEach((key) => {
            if (queryParams[key] !== defaultQueryParams[key] && queryParams[key] !== null) {
                newSearchParams.append(key, queryParams[key])
            }
        })
    newUrl += '?' + newSearchParams.toString()

    return newUrl
}