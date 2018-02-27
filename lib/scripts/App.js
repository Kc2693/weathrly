import React, { Component } from 'react';
// import './css/App-style';
import api from './API';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import dataClean from './data-cleaner';


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
    };
    this.setLocation = this.setLocation.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    let city = localStorage.getItem('city');
    let state = localStorage.getItem('state');

    if (localStorage.city) {
      this.getWeather(city, state);
      this.setState({welcomePage: false});
    }
  }

  getWeather(c, s) {
    api.getForecast(c, s).then(data => dataClean(data))
    .then(cleanData => this.setState({weatherData: cleanData}));

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
        data={this.state.weatherData.currentForecast}
      />
      <SevenHour data={this.state.weatherData.sevenHourForecast}/>
      <TenDay data={this.state.weatherData.tenDayForecast}/>
      </div>) :
      (<Welcome setLocation={this.setLocation}/>)
    }
    </div>
  );
  }
}
