import {  FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useHistory } from "react-router";
import { prepareUrl } from "../../../helpers/queryHelper";

const BaseSelect = (props: any) => {
    const {
        stateParams,
    } = props

    let history = useHistory()
    const replaceUrl = (newQueryParams: any) => {
         
        let newUrl = prepareUrl('/customer/list', newQueryParams)
        history.push(newUrl)
    };
    
    const handleStatusChange = (event: any) => {
        const newQueryParams = {
            ...stateParams,
            isEnable: event.target.value
        }
        replaceUrl(newQueryParams)
    }

    return (
        <FormControl variant="outlined">
            <InputLabel id="customer-status-label">Статус</InputLabel>
            <Select
                labelId="customer-status-label"
                id="customer-status"
                value={stateParams.isEnable}
                onChange={handleStatusChange}
                label="Статус"
            >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'enabled'}>Enabled</MenuItem>
                <MenuItem value={'disabled'}>Disabled</MenuItem>
            </Select>
        </FormControl>
    )
}
                
export default BaseSelect;