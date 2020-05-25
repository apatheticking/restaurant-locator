import React, { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import './ResultsList.css'

export default function ResultsList({ loading, restaurantData, loadMore, isRefinedSearch, newSearch, setNewSearch }) {
    const { total_entries, current_page } = restaurantData
    const [ restaurantList, setRestaurantList ] = useState([])
    const [ scrollYPosition, setScrollYPosition ] = useState()

    useEffect( () => {
        setScrollYPosition('50vh')
        setRestaurantList(restaurantData.restaurants)
    }, [newSearch])

    useEffect(() => {
        if (newSearch) { setNewSearch(false) }
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
        if(isRefinedSearch && !(total_entries < 25)) { loadMore(current_page + 1, isRefinedSearch) } 
        if(!isRefinedSearch){ loadMore(current_page + 1) }
    }

    return (
        <div>
            <p className={'total-results'}>total results: {total_entries} </p>
            { loading ? <span>...loading</span> : null }
            <div className={'search-results-container'}>
                {
                    restaurantList.map( (restaurant, i) => {
                        return <RestaurantCard key={i} data={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}
