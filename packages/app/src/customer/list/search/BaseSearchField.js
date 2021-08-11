import React from "react";

import {
    InputBase,
} from "@material-ui/core";


const BaseSearchField = (props) => {
    const {
        stateParams,
        setStateParams,
        classes,
    } = props;

    const handleChange = (event) => {
        setStateParams({
            ...stateParams,
            q: event.target.value
        })
    };

    return (
        <InputBase
            placeholder="Введите имя или фамилию для поиска"
            classes={{
                input: classes.searchInput,
            }}
            onChange={handleChange}
            value={stateParams.q}
        />
    )
}

export default BaseSearchField

