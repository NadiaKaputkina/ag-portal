import { TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import { useHistory } from "react-router";
import { prepareUrl } from "../../helpers/queryHelper";

const headCells: Object[] = [
    { column: 'id', label: 'N' },
    { column: 'lastName', label: 'Фамилия' },
    { column: 'firstName', label: 'Имя' },
    { column: 'age', label: 'Возраст' },
    { column: 'status', label: 'Статус' },
]

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.dark,
      fontSize: 12,
      textTransform: 'uppercase',
    },
  }))(TableCell);

const EnhancedTableHead = observer((props: any) => {
    const {
        queryParams,
        classes,
    } = props

    let history = useHistory()
    // const [stateOrderBy, setStateOrderBy] = useState<stateOrderByType>(queryParams.orderBy || [])
   
    const replaceUrl = (orderBy: Object[]) => {
        let newUrl = prepareUrl('/customer/list', 
            { ...queryParams, orderBy })
        history.push(newUrl)
    };

    const createSortHandler = (headCell: any) => (e: any): void => {
        let orderBy: Object[] = [...queryParams.orderBy]

        const stateOrderByItem = getOrderFromURL(headCell);
        
        if (stateOrderByItem) {
            const i: number = orderBy.findIndex((order: any) => order.column === headCell.column)

            if (stateOrderByItem.order) {
                orderBy.splice(i, 1)
            } else {
                orderBy[i] = { ...stateOrderByItem, order: 'desc' }
            }
        } else {
            orderBy.push({ column: headCell.column })
        }
    
        replaceUrl(orderBy)
    };

    const getOrderFromURL = (headCell: any) => {
        // const stateOrderByItem = stateOrderBy.find(item => item.column === headCell.column)
        const stateOrderByItem = queryParams.orderBy.find((orderItem: any) => orderItem.column === headCell.column)

        // if (stateOrderByItem) return stateOrderByItem.order || 'asc'

        // return false
        return stateOrderByItem
    }

    return (
        <TableHead className={classes.thead}>
            <TableRow>
                { headCells.map((headCell: any) => {
                    
                    const stateOrderByItem = getOrderFromURL(headCell)

                    return (
                        <StyledTableCell
                            variant="head"
                            key={headCell.column}
                            sortDirection={stateOrderByItem ? (stateOrderByItem.order || 'asc') : false}
                        >
                            <TableSortLabel
                                active={stateOrderByItem ? (stateOrderByItem.column === headCell.column) : false}
                                direction={stateOrderByItem ? stateOrderByItem.order : 'asc'}
                                onClick={createSortHandler(headCell)}
                            >
                                {headCell.label}
                                {(stateOrderByItem ? (stateOrderByItem.column === headCell.column) : false) ? (
                                    <span>
                                    </span>
                                ) : null}
                            </TableSortLabel>
                        </StyledTableCell>
                    )}
                )}
                <StyledTableCell
                    variant="head"
                >
                    <span>Платежи</span>
                </StyledTableCell>
                <StyledTableCell
                    variant="head"
                    align="right"
                >
                    <span>Действия</span>
                </StyledTableCell>
            </TableRow>
        </TableHead>
    );
})

export default EnhancedTableHead;
