import React from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";
import { useAppBarStyles } from "../../styles/rootStyles";

const FooterNavigation = () => {
    const classes = useAppBarStyles();

    return (
        <BottomNavigation className={classes.appBar}>
            <BottomNavigationAction  label="Facebook" className={classes.socialIcon} />
            <BottomNavigationAction  label="VK" className={classes.socialIcon} />
            <BottomNavigationAction  label="Instagram" className={classes.socialIcon} />
        </BottomNavigation>
    )
}

export default FooterNavigation;