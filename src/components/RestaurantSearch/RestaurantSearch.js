import React from 'react'
import './RestaurantSearch.css'
import Header from 'components/Header/Header'

export default function RestaurantSearch({handleSumbit, cityRef}) {
    return (
        <div className={'restaurant-search-container'}>
            <Header />
            <h2>Let's us help find something near you!</h2>
            <form onSubmit={handleSumbit}>
                <input className={'text-input'} type='text' ref={cityRef}/>
                <input className={'submit-button'} type="submit" value="Search" />
            </form>
        </div>
    )
}
