import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import { fetchRestaurants } from 'redux/restaurants/restaurantActions'
import ResultsList from 'components/ResultsList/ResultsList'
import RestaurantSearch from 'components/RestaurantSearch/RestaurantSearch'
import RefineSearch from 'components/RefineSearch/RefineSearch'
import './App.css';

function App({restaurantData, loading, fetchRestaurants, errorMsg}) {
  const [ isRefinedSearch, setIsRefinedSearch ] = useState(false)
  const [ newSearch, setNewSearch ] = useState(false)
  const cityRef = useRef()
  const searchByRef = useRef()
  const searchValueRef = useRef()
  
  const handleSumbit = (e) => {
    e.preventDefault()
    setNewSearch(true)
    setIsRefinedSearch(false)
    fetchRestaurants(cityRef.current.value)
  }

  const loadMore = (page, isRefinedSearch) => {
      if(isRefinedSearch) {
        fetchRestaurants(
          cityRef.current.value, 
          page, 
          searchByRef.current.value, 
          searchValueRef.current.value
        )
      } else {
        fetchRestaurants(cityRef.current.value, page)
      }
  }

  const handleRefineSearchSubmit = (e) => {
    e.preventDefault()
    setIsRefinedSearch(true)
    setNewSearch(true)
    fetchRestaurants(
      cityRef.current.value, 
      null, 
      searchByRef.current.value, 
      searchValueRef.current.value
    )
  }

  return (
    <div className="App">
      <RestaurantSearch 
          handleSumbit={handleSumbit}
          cityRef={cityRef}
      />
      { errorMsg ? <span>{errorMsg}</span> : null }
      { 
        restaurantData && restaurantData.restaurants.length !== 0 ? 
          <div>
              <RefineSearch 
                handleRefineSearchSubmit={handleRefineSearchSubmit}
                searchByRef={searchByRef}
                searchValueRef={searchValueRef}
              />
              <ResultsList 
                loading={loading}
                restaurantData={restaurantData}
                loadMore={loadMore}
                isRefinedSearch={isRefinedSearch}
                newSearch={newSearch}
                setNewSearch={setNewSearch}
              />
          </div>
          :
          restaurantData && newSearch ?
            <h2 className={'no-results'}>no results</h2> : null
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
    fetchRestaurants: (city, page, searchBy, searchValue) => dispatch(fetchRestaurants(city, page, searchBy, searchValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)