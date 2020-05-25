import {
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_REQUEST_FINISHED,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE,
} from './restaurantTypes'
import axios from 'axios'

export const fetchRestaurantRequest = () => {
    return {
        type: FETCH_RESTAURANTS_REQUEST,
    }
}

export const fetchRestaurantRequestFinished = () => {
    return {
        type: FETCH_RESTAURANTS_REQUEST_FINISHED
    }
}

export const fetchRestaurantsSuccess = ( restaurants ) => {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: restaurants
    }
}

export const fetchRestaurantFailure = ( error ) => {
    return {
        type: FETCH_RESTAURANTS_FAILURE,
        payload: error
    }
}

export const fetchRestaurants = ( city, page, searchBy, searchValue ) => {
    const cityParam = city ? city.replace(' ', '%20') : ''
    const pageParam = page ? `&page=${page}` : ''
    const searchByParam = searchBy ? `&${searchBy}=${searchValue.replace(' ', '%20')}` : ''

    return (dispatch) => {
        dispatch(fetchRestaurantRequest())
        axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${cityParam}${pageParam}${searchByParam}`)
            .then( response => {
                dispatch(fetchRestaurantsSuccess(response.data))
            })
            .catch( error => {
                dispatch(fetchRestaurantFailure(error))
            })
            .then( () => {
                dispatch(fetchRestaurantRequestFinished())
            })
    }
}