import React from 'react';
import Card from './Card';
import '../css/Card-style.css';



export default function TenDay(props) {
  let tenDays = props.data.forecast.simpleforecast.forecastday;

  return (
    <div className="tenday-card-container">
      {
        tenDays.map((day, index) => {
          return (
            <Card key= { index }
                  className="ten-day"
                  hour={day.date.weekday}
                  img={day.icon_url}
                  temp={day.high.fahrenheit} />);
        })
      }
    </div>
  )
}
