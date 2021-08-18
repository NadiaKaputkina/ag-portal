import React from 'react'
import {
    TablePagination,
} from "@material-ui/core";
import { useHistory } from 'react-router';
import { prepareUrl } from '../../helpers/queryHelper';
import { observer } from 'mobx-react';
import { useStore } from '../../store';

const BaseTablePagination = observer((props) => {
    const {
        queryParams
    } = props;
    const { CustomerStore } = useStore();
    
    let history = useHistory()

    // const replaceUrl = () => {
    //     let newUrl = prepareUrl('/customer/list', queryParams)
    //     history.push(newUrl)
    // };
    const handleChangePage = (e, newPage) => {
        let newUrl = prepareUrl('/customer/list', { ...queryParams, page: newPage + 1})
        history.push(newUrl)
    }
    const handleChangeRowsPerPage = (e) => {
        const limit = e.target.value
        let newUrl = prepareUrl('/customer/list', { ...queryParams, limit })
        history.push(newUrl)
    }

    return (
        <TablePagination
            rowsPerPageOptions={[2, 5, 10, 25, {label: 'All', value: -1}]}
            component="div"
            count={CustomerStore.totalCount}
            rowsPerPage={typeof queryParams.limit === 'string' ? parseInt(queryParams.limit) : queryParams.limit}
            page={queryParams.page - 1}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
})

export default BaseTablePagination;