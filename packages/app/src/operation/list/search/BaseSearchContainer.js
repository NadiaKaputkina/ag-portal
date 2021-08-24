import { useState } from "react";
import { useLocation } from "react-router";
import { prepareQueryParams } from "../../../helpers/queryHelper";
// import BaseSearchField from "./BaseSearchField";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core";
import searchStyles from "./searchStyles";

const useStyles = makeStyles(() => searchStyles)

const BaseSearchContainer = (props) => {
    const {
        customerList
    } = props;

    const classes = useStyles();

    let queryParams = prepareQueryParams(useLocation().search);
    
    const [qParam, setQParam] = useState('')
    
    const handleChangeAutocomplete = (event, newValue) => {
        // console.log('event', event);
        // console.log('newValue', newValue);
    }

    return (
        <div className={classes.search}>
            <Autocomplete
                id="lastName2"
                options={[]}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Фамилия" variant="outlined" />}
            />
            <Autocomplete
                id="firstName2"
                options={customerList}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                onChange={handleChangeAutocomplete}
                renderInput={(params) => <TextField {...params} label="Имя" variant="outlined" />}
            />
            {/* <BaseSearchField
                queryParams={queryParams}
                qParam={qParam}
                setQParam={setQParam}
            /> */}
        </div>
    )
}

export default BaseSearchContainer;

