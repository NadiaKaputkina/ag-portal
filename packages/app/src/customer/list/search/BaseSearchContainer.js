import { useState } from "react";
import BaseSearchField from "./BaseSearchField";
import { Button, makeStyles, Collapse, IconButton } from "@material-ui/core";
import searchStyles from "./searchStyles";
import AdvancedSearchContainer from "./AdvancedSearchContainer";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from 'react-router';
import { prepareUrl } from "../../../helpers/queryHelper";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(() => searchStyles)

const BaseSearchContainer = (props) => {
    const {
        queryParams

    } = props

    const classes = useStyles()

    const [stateParams, setStateParams] = useState(queryParams)
    
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    };

    let history = useHistory()
    const replaceUrl = () => {
        let newUrl = prepareUrl('/customer/list', stateParams)
        history.push(newUrl)
    };
    const handleClick = () => {
        replaceUrl()
    }
    return (
        <div className={classes.search}>
            <div className={classes.searchFieldsWrapper}>
                <BaseSearchField
                    stateParams={stateParams}
                    setStateParams={setStateParams}
                    classes={classes}
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <AdvancedSearchContainer
                        stateParams={stateParams}
                        setStateParams={setStateParams}
                    />
                </Collapse>
            </div>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
            </IconButton>
            <Button
                variant="contained" 
                color="primary"
                size="large"
                onClick={handleClick}>
                    <SearchIcon/>
                Поиск
            </Button>
        </div>
    )
}

export default BaseSearchContainer

