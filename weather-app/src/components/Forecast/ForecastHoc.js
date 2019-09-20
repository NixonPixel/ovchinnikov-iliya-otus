import {compose} from 'recompose'
import {connect} from 'react-redux'
import {getFiveDayForecast} from '../../actions/actions'
import classes from './styles'

const mapStateToProps = ({fiveDaysForecast}) => {
    const {forecast, isLoading, error} = fiveDaysForecast
    return {
        forecast, isLoading, error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFiveDayForecast: (name) => getFiveDayForecast(dispatch, name)
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps), classes)