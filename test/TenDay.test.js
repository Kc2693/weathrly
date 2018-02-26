import React from 'react';
import { mount, shallow} from 'enzyme';
import TenDay from '../lib/scripts/TenDay';
import Card from '../lib/scripts/Card';
import mockData from '../lib/scripts/MockData';


describe.only('Ten Day Cards', () => {
  let wrapper;
  const mockWeather = mockData.forecast.simpleforecast.forecastday;

  beforeEach(() => {
    wrapper = mount(<TenDay data={mockWeather}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should return 10 cards', () => {
    expect(wrapper.children().length).toEqual(10);
  });

  it('should have the data on cards', () => {

    expect(wrapper.find('h5').first().text()).toEqual('Wednesday')
    expect(wrapper.find('img').first().prop('src')).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
    expect(wrapper.find('h5').last().text()).toEqual('High/Low: 18/31')
  })
})
