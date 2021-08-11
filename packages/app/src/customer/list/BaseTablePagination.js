import React from 'react'
import {
    TablePagination,
} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { customerTotalCountSelector } from '../customerSelectors';
import { useHistory } from 'react-router';
import { prepareUrl } from '../../helpers/queryHelper';

const BaseTablePagination = (props) => {
    const {
        queryParams
    } = props;

    const customerTotalCount = useSelector(customerTotalCountSelector)
    
    let history = useHistory()

    // const replaceUrl = () => {
    //     let newUrl = prepareUrl('/customer/list', queryParams)
    //     history.push(newUrl)
    // };
    const handleChangePage = (e, page) => {
        console.log(page)
        //replaceUrl()
        let newUrl = prepareUrl('/customer/list', queryParams)
        history.push(newUrl)
    }
    const handleChangeRowsPerPage = (e) => {
        const limit = e.target.value
        // replaceUrl(limit)
        let newUrl = prepareUrl('/customer/list', { ...queryParams, limit })
        history.push(newUrl)
    }
    
    return (
        <>
            { 
                <TablePagination
                    rowsPerPageOptions={[2, 5, 10, 25, {label: 'All', value: -1}]}
                    component="div"
                    count={customerTotalCount}
                    rowsPerPage={typeof queryParams.limit === 'string' ? parseInt(queryParams.limit) : queryParams.limit}
                        page={queryParams.page - 1}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }
        </>
    )
}

export default BaseTablePagination;