import { TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core";
import { observer } from "mobx-react";

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
        createSortHandler,
    } = props

    const getOrderFromURL = (headCell: any) => {
        const stateOrderByItem = queryParams.orderBy.find((orderItem: any) => orderItem.column === headCell.column)
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
