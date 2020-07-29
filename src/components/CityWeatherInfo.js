import React, { useState, useEffect } from 'react';
import { cities } from '../data/citiesList';
import { getWeatherByCity } from '../services'

export function CityWeatherInfo(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        getWeatherByCity(cities[props.selectedCity].name).then(data => setData(data))
    }, [props.selectedCity])

    if(!props.selectedCity) return null
    if(data) {
        const {name, main} = data;
        return (
            <div className="city-info-box">
                <div>{name}: {main.temp} <span>&#x2103;</span></div>
            </div>
        )
    }
    return null
}
