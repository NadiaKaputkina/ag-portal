export interface ISearchStyles {
    [index: string]: any
}

const searchStyles: ISearchStyles = {
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
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}

export default searchStyles;