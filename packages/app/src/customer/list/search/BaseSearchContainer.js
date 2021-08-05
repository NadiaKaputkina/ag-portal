import { useState } from "react";
import { useLocation } from "react-router";
import { prepareQueryParams } from "../../../helpers/queryHelper";
import BaseSearchField from "./BaseSearchField";


const BaseSearchContainer = () => {
    let queryParams = prepareQueryParams(useLocation().search);
    
    const [qParam, setQParam] = useState('')

    return (
        <BaseSearchField
            queryParams={queryParams}
            qParam={qParam}
            setQParam={setQParam}
        />
    )
}

export default BaseSearchContainer;

