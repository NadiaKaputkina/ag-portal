import React from 'react';
import {
    ThemeProvider,
} from "@material-ui/core";
import { useLayoutStyles } from "../shared/styles/rootStyles";
import { theme } from '../shared/styles/theme';
// import FooterNavigation from '../shared/components/footer/footerNavigation';

const MainLayout = ({children}) => {
    const classes = useLayoutStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <div className={classes.layout}>
                    {children}
                </div>
                {/* <FooterNavigation /> */}
            </div>
        </ThemeProvider>
    )
}

export default MainLayout;