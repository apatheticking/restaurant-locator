import React from 'react'
import './RestaurantCard.css'

export default function RestaurantCard({ data }) {
    const { name, address, area, phone, image_url, mobile_reserve_url, reserve_url, price } = data
    return (
        <div className={'restaurant-card'}>
            <div className={'col-6 restaurant-image s-col-full'}>
                <img className={'restaurant-img'} src={image_url} alt={`The restaurant ${name}`}/>
            </div>
            <div className={'col-6 s-col-full'} >
                <div className={'restaurant-details'}>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{area}</p>
                    <p>Price: {"$".repeat(price)}</p>
                    <p>&#9743;{phone}</p>
                    <p><a className={'desktop-booking-link'} href={reserve_url} target="_blank" rel="noopener noreferrer">Book now</a></p>
                    <p><a className={'mobile-booking-link'} href={mobile_reserve_url} target="_blank" rel="noopener noreferrer">Book now</a></p>
                </div>
            </div>
        </div>
    )
}
