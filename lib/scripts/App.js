/* eslint-disable */
import React, { Component } from 'react';
// import './css/App-style';
import api from './API';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      welcomePage: true,
      weatherData: null,
      location: {
        city: '',
        state: ''
      }
    }
    this.setLocation = this.setLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  };

  componentDidMount() {
    let city = localStorage.getItem('city');
    let state = localStorage.getItem('state');

    if (localStorage.city) {
      this.getWeather(city, state);
      this.setState({welcomePage: false});
    }
  }

  getWeather(c, s) {
    api.getForecast(c, s).then(data => this.setState({weatherData: data}));

    localStorage.setItem('city', c);
    localStorage.setItem('state', s);
  }

  setLocation(c, s) {
    this.setState({location: {city: c, state: s}, welcomePage: false});

    this.getWeather(c, s);
  }


  render() {
    return (
      <div>
      { this.state.weatherData ?
      (<div>
      <Search setLocation={this.setLocation}
          srchDivCss="main-search-div"
          searchCss="main-search"
          srchBtnCss="main-search-btn"/>
      <CurrentWeather
        city={this.state.weatherData.current_observation.display_location.city}
        day={this.state.weatherData.forecast.txt_forecast.forecastday[0].title}
        temperature={this.state.weatherData.current_observation.temperature_string}
        condition={this.state.weatherData.forecast.simpleforecast.forecastday[0].conditions}
        high={this.state.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit}
        low={this.state.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit}
        summary={this.state.weatherData.forecast.txt_forecast.forecastday[0].fcttext}
      />
      <SevenHour data={this.state.weatherData.hourly_forecast}/>
      <TenDay data={this.state.weatherData.forecast.simpleforecast.forecastday}/>
      </div>) :
      (<Welcome setLocation={this.setLocation}/>)
    }
    </div>
  );
  }
}
