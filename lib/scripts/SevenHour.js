import React from 'react';
import Card from './Card';
import '../css/Card-style.css';
import propTypes from 'prop-types';


export default function SevenHour(props) {
  let sevenHours = props.data.slice(0, 7);

  return (
    <div className="hour-card-container">
    {
      sevenHours.map((hour, index) => {
        return (
          <Card key= { index }
                className="seven-hour"
                hour={hour.FCTTIME.civil}
                img={`${hour.icon_url}`}
                temp={`Temp: ${hour.temp.english}℉`} />);
      })
    }
    </div>
  );
}

SevenHour.propTypes = {
  data: propTypes.array
};
