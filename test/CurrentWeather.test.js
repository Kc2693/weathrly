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
  });

  it('should have a container div that contains headers', () => {
    expect(wrapper.containsAnyMatchingElements([
        <h1></h1>,
        <h5>Today: </h5>,
        <h5>Current Temperature: </h5>,
        <h5>Current Condition: </h5>,
        <h5>High: °F</h5>,
        <h5>Low: °F</h5>,
        <h4>Summary:</h4>,
    ])).toEqual(true);
  });

  it('should receive data', () => {
    wrapper = mount(<CurrentWeather data={mock} />)

    expect(wrapper.find('h1').text()).toEqual('Louisville')
    expect(wrapper.find('h5').first().text()).toEqual('Today: Wednesday')
    expect(wrapper.find('.container').childAt(2).text()).toEqual('Current Temperature: 46.0 F (7.8 C)')
    expect(wrapper.find('.container').childAt(3).text()).toEqual('Current Condition: Partly Cloudy')
    expect(wrapper.find('.container').childAt(4).text()).toEqual('High: 51°F')
    expect(wrapper.find('h5').last().text()).toEqual('Low: 32°F')
    expect(wrapper.find('p').text()).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.')
  });
})
