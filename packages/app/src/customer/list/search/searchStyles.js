import { yellow } from "@material-ui/core/colors";

const searchStyles = {
    search: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: '30px',
    },
    searchInput: {
        width: '100%',
        padding: '15px',
        background: '#f5f5f5'
    },
    searchFieldsWrapper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    advancedSearchWrapper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginTop: '20px'
    },
    searchSelect: {
        marginRight: '20px',
        width: '250px'
    },
    searchButton: {
        marginTop: '',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        //transition: theme.transitions.create('transform', {
        //duration: theme.transitions.duration.shortest,
        //}),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}

export default searchStyles;