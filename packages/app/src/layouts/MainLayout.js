import React from 'react';
import {
    ThemeProvider,
} from "@material-ui/core";
import { useAppBarStyles } from "../shared/styles/rootStyles";
import ApplicationBar from '../shared/components/applicationBar/applicationBar';
import { theme } from '../shared/styles/theme';
import SnackbarContainer from './snackBar/SnackBarContainer';

const MainLayout = ({children}) => {
    const classes = useAppBarStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                {/* <ApplicationBar /> */}
                
                <div className={classes.layout}>
                    {children}
                </div>
            </div>
            <SnackbarContainer />
        </ThemeProvider>
    )
}

export default MainLayout;