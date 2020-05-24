import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from 'redux/restaurants/restaurantActions'
import List from 'components/List/List'
import RestaurantSearch from 'components/RestaurantSearch/RestaurantSearch'
import RefineSearch from 'components/RefineSearch/RefineSearch'
import './App.css';

function App({restaurantData, loading, fetchRestaurants, error}) {
  // const [ city, setCity ] = useState()
  // const [ searchBy, setSearchBy] = useState('name')
  // const [ searchValue, setSearchValue ] = useState()
  const cityRef = useRef()
  const searchByRef = useRef(null)
  const searchValueRef = useRef(null)
  
  const handleSumbit = (e) => {
    e.preventDefault()
    fetchRestaurants(cityRef.current.value)
  }

  const loadMore = (page) => {
    fetchRestaurants(cityRef.current.value, page)
  }

  const handleRefineSearchSubmit = (e, searchBy, searchValue) => {
    e.preventDefault()
    console.log({searchBy, searchValue})
    // fetchRestaurants(cityRef.current.value, null, searchByRef.current.value, searchValueRef.current.value)
    fetchRestaurants(cityRef.current.value, null, searchBy.current.value, searchValue.current.value)    
  }

  return (
    <div className="App">
      <RestaurantSearch 
          handleSumbit={handleSumbit}
          cityRef={cityRef}
      />

      { 
        restaurantData && restaurantData.restaurants.length !== 0 ? 
          <div>
            <RefineSearch 
              handleRefineSearchSubmit={handleRefineSearchSubmit}
              // searchByRef={searchByRef}
              // searchValueRef={searchValueRef}
            />
            <List 
              loading={loading}
              restaurantData={restaurantData}
              error={error}
              loadMore={loadMore}
            />
          </div>
          :
          null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
      restaurantData: state.restaurantData,
      loading: state.loading,
      errorMsg: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: (city, page) => dispatch(fetchRestaurants(city, page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)