import React, { useState } from 'react';
import {
    AppBar,
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    Menu,
    MenuItem,
    Typography,
} from "@material-ui/core";
import appBarStyles from './appBarStyles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import PaymentIcon from '@material-ui/icons/Payment';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => appBarStyles)

const ApplicationBar = () => {
    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState('');
    let history = useHistory()
    const handleNavigationChange = (event, newValue) => {
        setActiveMenu(newValue)
        history.push(`/${newValue}/list`)
    }

    const auth = 'Admin'
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuChange = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleMenuClose = (e) => {
        setAnchorEl(null)
    }
    const handleViewProfile = (e) => {
        history.push('/profile')
    }
    const handleLogOut = (e) => {
        history.push('/login')
    }
   
    return (
        <AppBar className={classes.appBar}>
            <Typography variant="h6" color="inherit">
            </Typography>
            <BottomNavigation 
                value={activeMenu} 
                onChange={handleNavigationChange} 
                classes={{
                    root: classes.toolbar
                }}
                showLabels>
                <BottomNavigationAction label="Клиенты" value="customer" icon={<PeopleAltIcon />} />
                <BottomNavigationAction label="Платежи" value="operation" icon={<PaymentIcon />} />
                <BottomNavigationAction label="Настройки" value="settings" icon={<SettingsIcon />} />
            </BottomNavigation>
            {auth && (
                <>
                    <Avatar className={classes.square}
                        onClick={handleMenuChange}>
                    </Avatar>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleViewProfile}>Профиль</MenuItem>
                        <MenuItem onClick={handleLogOut}>Выйти</MenuItem>
                    </Menu>
                </>
            )}
        </AppBar>
    )
}

export default ApplicationBar;