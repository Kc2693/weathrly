import React, { Component } from 'react';
// import './css/App-style';
import mock from './MockData.js';
import CurrentWeather from './CurrentWeather';
import Card from './Card';
import SevenHour from './SevenHour';
import TenDay from './TenDay';



export default class App extends Component {
  constructor() {
    super();


  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
      <CurrentWeather
        city={mock.current_observation.display_location.city}
        day={mock.forecast.txt_forecast.forecastday[0].title}
        temperature={mock.current_observation.temperature_string}
        condition={mock.forecast.simpleforecast.forecastday[0].conditions}
        high={mock.forecast.simpleforecast.forecastday[0].high.fahrenheit}
        low={mock.forecast.simpleforecast.forecastday[0].low.fahrenheit}
        summary={mock.forecast.txt_forecast.forecastday[0].fcttext}
      />
      <SevenHour data={mock}/>
      <TenDay data={mock}/>
      </div>
    )
  }
}
