import React, { Component } from 'react';
import { cities } from '../data/citiesList';
import { getWeatherByCity } from '../services'

export class CityWeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            selectedCity: ''
        }
    }
    componentDidMount() {
        if(this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity});
            getWeatherByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data}))
        }
    }
    
    componentDidUpdate() {
        if(this.props.selectedCity && this.state.selectedCity !== this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity});
            getWeatherByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data}))
        }
    }

    render() {
        if(!this.props.selectedCity) return null
        if(this.state.data) {
            const {name, main} = this.state.data;
            return (
                <div className="city-info-box">
                    <div>{name}: {main.temp} <span>&#x2103;</span></div>
                </div>
            )
        }
        return null
    }
}
