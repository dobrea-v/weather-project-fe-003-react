import React from 'react';
import { CitySelector } from './CitySelector';
import { CityWeatherInfo } from './CityWeatherInfo';
import { cities } from '../data/citiesList';
export function Main(props) {
    
    return (
        <main className="locations">
            <CityWeatherInfo selectedCity={props.selectedCity}  />
            <CitySelector selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity} />
            {props.selectedCity && cities[props.selectedCity] ? (
                    <img id="image-placeholder" src={cities[props.selectedCity].url} alt={`${cities[props.selectedCity].name} skyline`} />
                ) : (
                    <img id="image-placeholder" src="https://wallpaperstock.net/wallpapers/thumbs1/56955hd.jpg" alt="city skyline" />
            )}
        </main>
    )
}