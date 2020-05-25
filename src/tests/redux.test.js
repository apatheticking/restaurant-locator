import * as actions from 'redux/restaurants/restaurantActions'
import * as types from 'redux/restaurants/restaurantTypes'
import restaurantReducer from 'redux/restaurants/restaurantReducer'

describe('actions', () => {
    it('it should return the proper type' , () => {
        const expectedAction = {
            type: types.FETCH_RESTAURANTS_REQUEST
        }
        expect(actions.fetchRestaurantRequest()).toEqual(expectedAction)
    })

    it('it should create an action with restaurant data payload', () => {
        const restaurantData = {
            total_entries: 10,
            per_page: 10,
            current_page: 1,
            restaurants: [] 
        }
        const expectedAction = {
            type: types.FETCH_RESTAURANTS_SUCCESS,
            payload: restaurantData
        }
        expect(actions.fetchRestaurantsSuccess(restaurantData)).toEqual(expectedAction)
    })
})

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(restaurantReducer(undefined, {})).toEqual(
            {
                loading: false,
                restaurantData: null,
                error: ''
            }
        )
    })

    it('should return store fetched restaurant data', () => {
        const initialState = {
            loading: false,
            restaurantData: null,
            error: ''
        }

        const payloadData = {
            total_entries: 10,
            per_page: 10,
            current_page: 1,
            restaurants: [] 
        }

        const reducerAction = {
            type: types.FETCH_RESTAURANTS_SUCCESS,
            payload: payloadData
        }

        const expectedResult = {
            loading: false,
            restaurantData: payloadData,
            error: ''
        }

        expect(restaurantReducer(initialState, reducerAction)).toEqual(expectedResult)
    })
    
})
