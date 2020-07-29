import React, { Component } from 'react';
import { getWeatherByCity } from '../services'
export class CityRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null
        }
    }


    componentDidMount() {
        this.setState({ selectedCity: this.props.selectedCity})
        getWeatherByCity(this.props.cityName).then((data) => {
            this.setState({ 
                data,
                isLoading: false
            })
        }).catch(err => this.setState({isLoading: false}))
    }

    handleReload = (cityName) => {
        this.setState({ isLoading: true})
        getWeatherByCity(this.props.cityName).then((data) => {
            this.setState({ 
                data,
                isLoading: false
            })
        }).catch(err => this.setState({isLoading: false}))
    }

    render() {
        if(this.state.isLoading) {
            return (<p>Loading...</p>)
        }
        if(this.state.data) {
            return (
                <div>
                    {this.props.cityName}
                    {this.state.data.weather[0].description}
                </div>
            )
        }
        return (<p>Sorry could not get data, please refresh page <button onClick={() => this.handleReload(this.props.cityName)}>Reload</button></p>)
    }
}

