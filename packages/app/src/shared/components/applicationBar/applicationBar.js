import React from 'react';
import {
    AppBar,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import appBarStyles from './appBarStyles';

const useStyles = makeStyles(() => appBarStyles)

const ApplicationBar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationBar;