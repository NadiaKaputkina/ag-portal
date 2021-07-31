import {
    makeStyles,
} from "@material-ui/core";

export const DRAWER_WIDTH = 240;

export const DEFAULT_STYLES = {
    defaultPage: {
        width: "100%",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    table: {
        marginTop: '100px',
    }
}

export const useDefaultStyles = makeStyles(() => ({
    defaultPage: ({defaultPage}) => defaultPage
}))

export const useAppBarStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
    },
    toolbar: {
        paddingRight: 24,
    },
    layout: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        background: 'red',
        width: '50px',
        height: '50px',
    }
}));
