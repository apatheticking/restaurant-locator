import React from 'react'
import './RestaurantSearch.css'
import Header from 'components/Header/Header'

export default function RestaurantSearch({handleSumbit, cityRef}) {
    return (
        <div className={'restaurant-search-container'}>
            <Header />
            <h2>Let's us help find something near you!</h2>
            <form onSubmit={handleSumbit}>
                <label htmlFor={'city-search'}>City Search</label>
                <input id={'city-search'} className={'text-input'} type='text' ref={cityRef}/>
                <input id={'city-search-submit-button'} className={'submit-button'} type="submit" value="Search" />
            </form>
        </div>
    )
}
