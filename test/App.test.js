import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/scripts/App'
import Search from '../lib/scripts/Search'
import CurrenWeather from '../lib/scripts/CurrentWeather'
import SevenHour from '../lib/scripts/SevenHour'
import TenDay from '../lib/scripts/TenDay'
import Welcome from '../lib/scripts/Welcome'
import '../__mocks__/storageMock';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should have the correct initial state', () => {
    expect(wrapper.state('welcomePage')).toEqual(true)
    expect(wrapper.state('weatherData')).toEqual(null)
    expect(wrapper.state('location')).toEqual({city: '', state: ''})

  })

  it.skip('should render the Welcome component if localstorage is empty', () => {
    const emptyStorage = localStorage.store
    expect(emptyStorage).toEqual({});
    expect(wrapper.state('welcomePage')).toEqual(true);
  })

  it('should retrive data from local storage on mount', () => {
    const city = 'Austin';
    const state = 'Texas';

    localStorage.setItem('city', city);
    localStorage.setItem('state', state);

    wrapper = mount(<App />);

    expect(wrapper.state().location.city).toEqual('Austin')
  })


  it.skip('should render Search, CurrentWeather, SevenHour, and TenDay once there is weather data', () => {

  })

})
