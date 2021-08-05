import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
    fade,
    InputBase,
    makeStyles
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import { prepareUrl } from "../../../helpers/queryHelper";

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}))
const BaseSearchField = (props) => {

    const {
        queryParams,
        qParam,
        setQParam,
    } = props;

    const classes = useStyles()
    // const dispatch = useDispatch()

    const handleOnBlur = (event) => {
        // setQueryParams({...queryParams, [prop]: event.target.value})
        // setIsSearched(!isSearched)
        // dispatch(search(event.target.value)).then((res) => {
        //     setEmployeeCount(res)
        // })
    };
    const handleChange = (event) => {
        setQParam(event.target.value)

        // setQueryParams({...queryParams, [prop]: event.target.value})
        // setIsSearched(!isSearched)
        // dispatch(search(event.target.value)).then((res) => {
        //     setEmployeeCount(res)
        // })
    };
    let history = useHistory()

    const replaceUrl = () => {
        let newUrl = prepareUrl('/customer/list', { ...queryParams, q: qParam })
        history.push(newUrl)
    };

    const handleClick = () => {
        // console.log('click');
        replaceUrl();
    }

    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onBlur={handleOnBlur}
                onChange={handleChange}
            />
            <div className={classes.searchIcon}>
                <SearchIcon
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default BaseSearchField

