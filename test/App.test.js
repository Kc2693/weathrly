import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/scripts/App'
import Search from '../lib/scripts/Search'
import CurrenWeather from '../lib/scripts/CurrentWeather'
import SevenHour from '../lib/scripts/SevenHour'
import TenDay from '../lib/scripts/TenDay'
import Welcome from '../lib/scripts/Welcome'
import '../__mocks__/storageMock';
import MockData from '../lib/scripts/MockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have the correct initial state', () => {
    expect(wrapper.state('welcomePage')).toEqual(true)
    expect(wrapper.state('weatherData')).toEqual(null)
    expect(wrapper.state('location')).toEqual({city: '', state: ''})

  })

  it('should render the Welcome component if localstorage is empty', () => {
    const emptyStorage = localStorage.store
    expect(emptyStorage).toEqual({});
    expect(wrapper.state('welcomePage')).toEqual(true);
  })

  it.skip('should hide welcome & render other components there is weatherData', () => {
    wrapper.setState({weatherData: MockData});

    shallow(<App />);
    expect(wrapper.find('CurrenWeather').length).toEqual(1);
  });

});
