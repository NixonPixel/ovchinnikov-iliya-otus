import {
    CITY_LIST_ERROR,
    CITY_LIST_LOADING,
    CITY_LIST_PUSH
  } from "../actions/actionTypes";

const cityList = (state, action) => {
    if(state === undefined) {
        return {
            isLoading: false,
            error: '',
            list: []
        }
    }
    switch(action.type) {
        
        case CITY_LIST_ERROR: {
            return {
                ...state.cityList,
                isLoading: false,
                error: action.payload
            }
        }
        case CITY_LIST_LOADING: {
            return {
                ...state.cityList,
                isLoading: true
            }
        }
        case CITY_LIST_PUSH: {
            return {
                ...state.cityList,
                isLoading: false,
                list: action.payload
            }
        }
        
        default : 
            return state.cityList
    }
}

export default cityList