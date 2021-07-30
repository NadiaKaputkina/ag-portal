import React from 'react';
import {
    AppBar,
    Toolbar,
} from "@material-ui/core";
import { useAppBarStyles } from "../../styles/rootStyles";

const ApplicationBar = () => {
    const classes = useAppBarStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            </Toolbar>
        </AppBar>
    )
}

export default ApplicationBar;