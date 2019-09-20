import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
    },
    dayName: {
        textAlign: "center",
        padding: 0,
        margin: 0,
        color: '#fff'
    },
    dayContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    paragraph: {
        fontSize: '1.5rem'
    }
}))

export default classes