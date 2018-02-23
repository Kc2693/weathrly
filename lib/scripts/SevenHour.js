import React from 'react';
import Card from './Card';


export default function SevenHour(props) {
  let sevenHours = props.data.hourly_forecast.slice(0,7);

  return (
    <div>
    {
      sevenHours.map((hour, index) => {
        return (
          <Card key= { index }
                className="seven-hour"
                time={`${hour.FCTTIME.hour}00`}
                image={hour.icon_url}
                temp={`${hour.temp.english}℉`} />);
      })
    }
  </div>
  )
}
