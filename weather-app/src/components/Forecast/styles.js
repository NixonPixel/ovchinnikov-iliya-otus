import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) =>({
    header: {
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(2),
        display: 'flex',
    },
    cityName: {
        textAlign: 'center',
        margin: theme.spacing(2)
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
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        maxWidth: '40%'
    },
    listItemActive: {
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: '#fff'
    },
    dayList: {
        padding: theme.spacing(1)
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
    
}))

export default classes