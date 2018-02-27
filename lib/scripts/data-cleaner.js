export default function dataClean(data) {
  const filteredData = {
    currentForecast: {
      city: data.current_observation.display_location.city,
      day: data.forecast.txt_forecast.forecastday[0].title,
      temperature: data.current_observation.temperature_string,
      condition: data.forecast.simpleforecast.forecastday[0].conditions,
      high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext
    },
    sevenHourForecast: [],
    tenDayForecast: []
  };

  function pushForecasts(data) {
    filteredData.sevenHourForecast.push(...data.hourly_forecast.slice(0, 7));
    filteredData.tenDayForecast.push(...data.forecast.simpleforecast.forecastday);
  }

  pushForecasts(data);

  return filteredData;
}
