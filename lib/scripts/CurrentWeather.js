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
        <h1 className="city">{this.props.data.city}</h1>
        <h5>Today: {this.props.data.day}</h5>
        <h5>Current Temperature: {this.props.data.temperature}</h5>
        <h5>Current Condition: {this.props.data.condition}</h5>
        <h5>High: {this.props.data.high}°F</h5>
        <h5>Low: {this.props.data.low}°F</h5>
        <h4>Summary:</h4>
      </div>
      <div className="summary-container">
          <p>{this.props.data.summary}</p>
      </div>
      </section>
    );
  }
}

CurrentWeather.propTypes = {
  data: propTypes.object
};
