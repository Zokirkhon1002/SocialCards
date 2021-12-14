import React from 'react';
import './LStyle.css'

function Locatioin({location}) {
    return (
        <div className="location">
            <p>{location.street.number} {location.street.name}</p>
            <p>City: {location.city}</p>
            <p>Country: {location.country}</p>
            <p>PostCode: {location.postcode}</p>
            <p>TimeZone: {location.timezone.offset}</p>
        </div>
    )
}

export default Locatioin
