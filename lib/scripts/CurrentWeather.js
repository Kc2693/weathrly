import React, { Component } from 'react';
import '../css/CurrentWeather-style.css';
import propTypes from 'prop-types';


export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <section className="current-weather">
      <div className="video-container">
        <iframe id="video-background" width="100%" height="800px"
          src="https://www.youtube.com/embed/YYh-omEwmV8?rel=0&controls=0&showinfo=0&autoplay=1&autohide=1&mute=1"
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
      <div className="container">
        <h1>Current Weather</h1>
        <h4>Current City: {this.props.data.city}</h4>
        <h5>Current Day: {this.props.data.day}</h5>
        <h5>Current Temperature: {this.props.data.temperature}</h5>
        <h5>Current Condition: {this.props.data.condition}</h5>
        <h5>High: {this.props.data.high}°F</h5>
        <h5>Low: {this.props.data.low}°F</h5>
        <h5>Summary: {this.props.data.summary}</h5>
      </div>
      </section>
    );
  }
}

CurrentWeather.propTypes = {
  data: propTypes.object
};
