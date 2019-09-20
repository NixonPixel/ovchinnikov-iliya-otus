import {
    CITY_LIST_ERROR,
    CITY_LIST_LOADING,
    CITY_LIST_PUSH,
    CITY_LIST_REMOVE
} from "../actions/actionTypes";

const cityList = (state, action) => {
    if (state === undefined) {
        return {
            isLoading: false,
            error: '',
            list: []
        }
    }
    switch (action.type) {

        case CITY_LIST_ERROR: {
            return {
                list: [...state.cityList.list],
                isLoading: false,
                error: action.payload
            }
        }
        case CITY_LIST_LOADING: {
            return {
                list: [...state.cityList.list],
                error: '',
                isLoading: true
            }
        }
        case CITY_LIST_PUSH: {
            return {
                error: '',
                isLoading: false,
                list: action.payload
            }
        }
        case CITY_LIST_REMOVE: {
            const idx = action.payload
            const newList = [...state.cityList.list.slice(0, idx), ...state.cityList.list.slice(idx + 1)]
            return {
                ...state.cityList,
                list: newList,
                isLoading: false,
            }
        }

        default:
            return state.cityList
    }
}

export default cityList