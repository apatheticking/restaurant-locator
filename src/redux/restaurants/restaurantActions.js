import {
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_REQUEST_FINISHED,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE,
} from './restaurantsTypes'
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

//http://opentable.herokuapp.com/api/restaurants?city=toronto&address=ossington

export const fetchRestaurants = ( city, page, searchBy, searchValue ) => {
    
    console.log({city, page, searchBy, searchValue})
    console.log(searchValue)
    const cityParam = city ? city.replace(' ', '%20') : ''
    const pageParam = page ? `&page=${page}` : ''
    const searchByParam = searchBy ? `&${searchBy}=${searchValue.replace(' ', '%20')}` : ''

    console.log({pageParam, searchByParam})
    
    return (dispatch) => {
        dispatch(fetchRestaurantRequest())
        axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${cityParam}${pageParam}${searchByParam}`)
            .then( response => {
                const restaurants = response.data
                dispatch(fetchRestaurantsSuccess(restaurants))
            })
            .catch( error => {
                // confirm what is error you're getting back
                //look at axios documentation
                const errorMsg = error.message
                dispatch(fetchRestaurantFailure(errorMsg))
            })
            .then( ()=> {
                dispatch(fetchRestaurantRequestFinished())
            })
    }
}