import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core";
import searchStyles from "./searchStyles";
import BaseAutocomplete from "./BaseAutocomplete";
import { useSelector } from "react-redux";
import { customerListSelector } from "../../customerSelectors";


const useStyles = makeStyles(() => searchStyles)

const AdvancedSearchContainer = (props) => {
    const {
        stateParams,
        setStateParams,
    } = props;

    const classes = useStyles();
    const customerList = useSelector(customerListSelector)


    const handleChangeAutocomplete = (event, newValue) => {
        // console.log('event', event);
        // console.log('newValue', newValue);
    }
    
    return (
        <div className={classes.advancedSearchWrapper}>
            <Autocomplete
                id="combo-box-demo"
                options={[]}
                getOptionLabel={(option) => option.title}
                className={classes.searchSelect}
                onChange={handleChangeAutocomplete}
                renderInput={(params) => <TextField {...params} label="Фамилия" variant="outlined" />}
            />
            <BaseAutocomplete
                id='customerNameFilter'
                options={customerList}
                fieldName={'name'}
                optionFieldName={'id'}
                stateParamFieldName={'customerId'}
                label={'Имя'}
                stateParams={stateParams}
                setStateParams={setStateParams}
            />
        </div>
    )
}

export default AdvancedSearchContainer;

