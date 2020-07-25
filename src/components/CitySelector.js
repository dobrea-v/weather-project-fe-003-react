import React from 'react';
import { cities } from '../data/citiesList';

export function CitySelector(props) {

    const citiesKeys = Object.keys(cities);

    const handleCityChange = (e) => {
        const city = e.target.value;
        props.getSelectedCity(city)
    }

    return (
        <select value={props.selectedCity} onChange={handleCityChange} className="locations__select" id="city-selector" name="city-selector">
            <option value="none">--select--</option>
            {
                citiesKeys.map(city => {
                return (<option id={city} key={city} value={city}>{cities[city].name}</option>)
                })
            }
        </select>
    )
}