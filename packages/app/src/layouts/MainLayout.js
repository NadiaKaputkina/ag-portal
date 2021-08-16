import React from 'react';
import {
    ThemeProvider,
} from "@material-ui/core";
import { useLayoutStyles } from "../shared/styles/rootStyles";
import ApplicationBar from '../shared/components/applicationBar/applicationBar';
import { theme } from '../shared/styles/theme';
// import SnackBarContainer from './snackBar/SnackBarContainer';
import FooterNavigation from '../shared/components/footer/footerNavigation';


const MainLayout = ({children}) => {
    const classes = useLayoutStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <ApplicationBar />
                <div className={classes.layout}>
                    {children}
                </div>
                <FooterNavigation />
            </div>
            {/* <SnackBarContainer /> */}
        </ThemeProvider>
    )
}

export default MainLayout;