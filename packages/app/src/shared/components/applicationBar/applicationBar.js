import React, { useState } from 'react';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
} from "@material-ui/core";
import appBarStyles from './appBarStyles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles(() => appBarStyles)

const ApplicationBar = () => {
    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState('customer');

    const handleMenuChange = (event, newValue) => {
        console.log(newValue);
        setActiveMenu(newValue)
    }

    return (
        <AppBar className={classes.appBar}>
            <BottomNavigation 
                value={activeMenu} 
                onChange={handleMenuChange} 
                classes={{
                    root: classes.toolbar
                }}
                showLabels>
                <BottomNavigationAction label="Клиенты" value="customer" icon={<PeopleAltIcon />} />
                <BottomNavigationAction label="Платежи" value="operation" icon={<PaymentIcon />} />
                <BottomNavigationAction label="Настройки" value="settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </AppBar>
    )
}

export default ApplicationBar;