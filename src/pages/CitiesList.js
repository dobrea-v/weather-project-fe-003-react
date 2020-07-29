import React from 'react';
import { cities } from '../data/citiesList';
import { CityRow } from '../components/CityRow';
export function CitiesList(props) {

    const citiesKeys = Object.keys(cities);
    const getFilteredCities = () => {
        return citiesKeys.filter(city => {
            if(city !== props.selectedCity) {
                return city
            }
        })
    }
    
    return (
        <React.Fragment>
            <h1>List of cities</h1>
            {getFilteredCities().map(city => {
                return (<CityRow key={city} cityName={cities[city].name} />)
            })}
        </React.Fragment>
    )
}