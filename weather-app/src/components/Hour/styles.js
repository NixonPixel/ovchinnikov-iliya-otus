import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        padding: theme.spacing(3),
        minWidth: 290
    },
    card: {
        width: '100%',
        maxWidth: '450px'
    }
    
}))

export default classes