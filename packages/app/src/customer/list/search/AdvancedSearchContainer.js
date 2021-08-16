import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {  makeStyles } from "@material-ui/core";
import searchStyles from "./searchStyles";
import BaseAutocomplete from "./BaseAutocomplete";
import BaseSwitch from "./BaseSwitch";
import { useStore } from '../../../store';

const useStyles = makeStyles(() => searchStyles)

const AdvancedSearchContainer = (props) => {
    const {
        stateParams,
        setStateParams,
    } = props;

    const classes = useStyles();
    const { CustomerStore } = useStore();

    const customerList = CustomerStore.items

    const handleChangeAutocomplete = (event, newValue) => {
        // console.log('event', event);
        // console.log('newValue', newValue);
    }

    return (
        <div className={classes.advancedSearchWrapper}>
            <Autocomplete
                id="lastName"
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
            <BaseSwitch 
                stateParams={stateParams}
            />
        </div>
    )
}

export default AdvancedSearchContainer;

