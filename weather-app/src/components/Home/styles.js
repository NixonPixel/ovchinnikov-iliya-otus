import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    header: {
        display: 'flex',
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(2),
    },
    leftBar: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: '40%'
    },
    rightBar: {
        flexGrow: 1,
        marginLeft: 'auto',
        padding: theme.spacing(1),
        paddingTop: theme.spacing(3),
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxWidth: '40%'
    },
    withBorder: {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: 4
    },
    inputAddCity: {
        width: '100%',
        maxWidth: '680px',
        height: 48,
    },
    addCityBtn: {
        marginLeft: theme.spacing(2),
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    
    main: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
}))

export default classes