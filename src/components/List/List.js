import React, { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import './List.css'

export default function List({ restaurantData, error, loadMore }) {
    const { total_entries, current_page } = restaurantData
    const [ restaurantList, setRestaurantList ] = useState([])
    const [ scrollYPosition, setScrollYPosition ] = useState()

    useEffect(() => {
        setRestaurantList(restaurantList.concat(restaurantData.restaurants))
        window.scrollTo(0, scrollYPosition)
    },[restaurantData])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },)
    
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setScrollYPosition(window.scrollY)
        loadMore(current_page + 1)
    }

    if (error) {return <span>{error}</span>}

    return (
        <div>
            <p className={'total-results'}>total results: {total_entries} </p>
            <div className={'search-results-container'}>
                {restaurantList.map( (restaurant, i) => {
                return <RestaurantCard key={i} data={restaurant}/>
                })}
            </div>
        </div>
    );
}
