import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';

const BaseAutocomplete = (props) => {
    const {
        id,
        options,
        fieldName,
        optionFieldName,
        stateParamFieldName,
        label,
        stateParams,
        setStateParams,
    } = props;
 

    const getAutocompleteValue = () => {
        if (!options.length) return null;
        
        return options.find(option => {
            return option[optionFieldName] === +stateParams[stateParamFieldName]
        });
    }

    // const [value, setValue] = useState(getAutocompleteValue())
    
    // console.log("🚀 ~ file: BaseAutocomplete.js ~ line 27 ~ BaseAutocomplete ~ value", value)
    // console.log("🚀 ~ file: BaseAutocomplete.js ~ line 27 ~ BaseAutocomplete ~ getAutocompleteValue()", getAutocompleteValue())

    const handleChangeAutocomplete = (event, newValue) => {
        console.log("🚀 ~ file: BaseAutocomplete.js ~ line 25 ~ handleChangeAutocomplete ~ newValue", newValue)
        setStateParams({
            ...stateParams,
            [stateParamFieldName]: newValue ? newValue[optionFieldName] : null
        })
    }

    return (
        <Autocomplete
            id={id}
            options={options}
            value={getAutocompleteValue()}
            getOptionLabel={option => option[fieldName]}
            style={{ width: 250 }}
            onChange={handleChangeAutocomplete}
            renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        />
    )
}

export default BaseAutocomplete;

