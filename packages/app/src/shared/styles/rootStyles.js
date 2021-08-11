import {
    makeStyles,
} from "@material-ui/core";

export const DEFAULT_STYLES = {
    defaultPage: {
        width: "100%",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}

export const useDefaultStyles = makeStyles(() => ({
    defaultPage: ({defaultPage}) => defaultPage
}))

export const useLayoutStyles = makeStyles(() => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    layout: {
        width: '90%',
        alignSelf: 'center',
        display: 'flex',
        flex: 1,
        marginTop: '90px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
}));
