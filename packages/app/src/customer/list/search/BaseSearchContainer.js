import { useState } from "react";
import { useLocation } from "react-router";
import { prepareQueryParams } from "../../../helpers/queryHelper";
import BaseSearchField from "./BaseSearchField";


const BaseSearchContainer = () => {
    let queryParams = prepareQueryParams(useLocation().search);
    // const [queryParams, setQueryParams] = useState(startQueryParams)

    return (
        <BaseSearchField
            queryParams={queryParams}
        />
    )
}

export default BaseSearchContainer;

