import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        padding: theme.spacing(3)
    },
    title: {
        textAlign: 'center',
        color: theme.palette.primary.main,
    },
    icon: {
        verticalAlign: 'middle',
        marginLeft: theme.spacing(1)
    },
    paragraph: {
        fontSize: '1.5rem'
    }
}))

export default classes