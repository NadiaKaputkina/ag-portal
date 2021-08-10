import React from 'react';
import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
} from "@material-ui/core";
import footerStyles from './footerStyles';

const useStyles = makeStyles(() => footerStyles)

const FooterNavigation = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.footer}>
            <BottomNavigationAction  label="Facebook" className={classes.socialIcon} />
            <BottomNavigationAction  label="VK" className={classes.socialIcon} />
            <BottomNavigationAction  label="Instagram" className={classes.socialIcon} />
        </BottomNavigation>
    )
}

export default FooterNavigation;