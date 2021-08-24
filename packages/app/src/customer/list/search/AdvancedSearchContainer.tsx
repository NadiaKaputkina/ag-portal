import { makeStyles, Theme } from "@material-ui/core";
import BaseAutocomplete from "./BaseAutocomplete";
// import BaseSwitch from "./BaseSwitch";
import { useStore } from '../../../store';
import BaseSelect from './BaseSelect';
import { useEffect } from "react";
import { observer } from "mobx-react";
import searchStyles from "./searchStyles";

const useStyles = makeStyles((theme: Theme) => ({ ...searchStyles}))

const AdvancedSearchContainer = observer((props: any) => {
    const {
        stateParams,
        setStateParams,
    } = props;

    const classes = useStyles();
    const { CustomerStore } = useStore();

    useEffect(() => {
        CustomerStore.loadCustomersLastNameList()
    }, []);

    return (
        <div className={classes.advancedSearchWrapper}>
            <BaseAutocomplete
                id='customerNameFilter'
                options={CustomerStore.lastNameList}
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
})

export default AdvancedSearchContainer;

