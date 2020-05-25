import { 
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_REQUEST_FINISHED,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE
} from './restaurantTypes'

const initialState = {
    loading: false,
    restaurantData: null,
    error: ''
}

const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RESTAURANTS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_RESTAURANTS_REQUEST_FINISHED:
            return {
                ...state,
                loading: false
            }
        case FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                restaurantData: action.payload   
            } 
        case FETCH_RESTAURANTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default restaurantReducer