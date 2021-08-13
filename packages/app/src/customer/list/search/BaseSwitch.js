import Switch from '@material-ui/core/Switch';
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { useHistory } from 'react-router';
import { prepareUrl } from '../../../helpers/queryHelper';

const BaseSwitch = (props) => {
    const {
        stateParams,
    } = props

    let history = useHistory()
    const replaceUrl = (newQueryParams) => {
         
        let newUrl = prepareUrl('/customer/list', newQueryParams)
        history.push(newUrl)
    };
    const toggleStatus = (event) => {
        const newQueryParams = {
            ...stateParams,
            status: event.target.checked ? 'enabled' : 'disabled'
        }
        replaceUrl(newQueryParams)
    }
    const getStatusValue = (status) => {     
        switch (status) {
            case 'enabled': 
                return true
            case 'disabled':
                return false
            default:
                return true
        }   
    }
    return (
        <FormGroup>
            <FormControlLabel
                control={<Switch color="primary" checked={getStatusValue(stateParams.status)} onChange={toggleStatus} />}
                label="Статус"
                labelPlacement="bottom"
            />
        </FormGroup>
    )
}

export default BaseSwitch;

