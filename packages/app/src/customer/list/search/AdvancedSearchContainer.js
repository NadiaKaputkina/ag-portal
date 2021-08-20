import { makeStyles } from "@material-ui/core";
import searchStyles from "./searchStyles";
import BaseAutocomplete from "./BaseAutocomplete";
// import BaseSwitch from "./BaseSwitch";
import { useStore } from '../../../store';
import BaseSelect from './BaseSelect';

const useStyles = makeStyles(() => searchStyles)

const AdvancedSearchContainer = (props) => {
    const {
        stateParams,
        setStateParams,
    } = props;

    const classes = useStyles();
    const { CustomerStore } = useStore();

    const customerList = CustomerStore.items

    return (
        <div className={classes.advancedSearchWrapper}>
            <BaseAutocomplete
                id='customerNameFilter'
                options={customerList}
                fieldName={'lastName'}
                optionFieldName={'id'}
                stateParamFieldName={'customerId'}
                label={'Фамилия'}
                stateParams={stateParams}
                setStateParams={setStateParams}
            />
            {/* <BaseSwitch 
                stateParams={stateParams}
            /> */}
            <BaseSelect
                stateParams={stateParams}
            />
        </div>
    )
}

export default AdvancedSearchContainer;

