import React from 'react';
import { mount, shallow} from 'enzyme';
import CurrentWeather from '../lib/scripts/CurrentWeather';
import mockData from '../lib/scripts/MockData';

describe('CurrentWeather', () => {
  let wrapper;
  const mock = {
        city: mockData.current_observation.display_location.city,
        day: mockData.forecast.txt_forecast.forecastday[0].title,
        temperature: mockData.current_observation.temperature_string,
        condition: mockData.forecast.simpleforecast.forecastday[0].conditions,
        high: mockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: mockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: mockData.forecast.txt_forecast.forecastday[0].fcttext
      }
  beforeEach(() => {
    wrapper = shallow(<CurrentWeather data={mock}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
