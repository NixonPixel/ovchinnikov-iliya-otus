import {withStyles} from '@material-ui/core'

const classes = withStyles((theme) => ({
    listItemActive: {
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: '#fff'
    },
    deleteIcon: {
        opacity: 0,
        transitionDuration: '0.15s'
    },
    listItem: {
        '&:hover': {
            '& .CityList-deleteIcon-10': {
                opacity: 1
            }
        }
    },
    expandBtn: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: '#fff',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        display: 'block',
        margin: '0 auto',
        marginTop: theme.spacing(1)
    },
    withBorder: {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: 4
    },
    padding: {
        padding: 0
    }
}))

export default classes 