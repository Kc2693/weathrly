import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/scripts/App';
import Search from '../lib/scripts/Search';
import CurrenWeather from '../lib/scripts/CurrentWeather';
import SevenHour from '../lib/scripts/SevenHour';
import TenDay from '../lib/scripts/TenDay';
import Welcome from '../lib/scripts/Welcome';
import '../__mocks__/storageMock';
import MockData from '../lib/scripts/MockData';
import dataClean from '../lib/scripts/data-cleaner';

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
    expect(wrapper.find('Welcome').length).toEqual(1);
  })

  it('should hide welcome & render other components there is weatherData', () => {
    wrapper.setState({weatherData: MockData});

    shallow(<App />);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(0);
  });

  it('Should put location in local storage and state, and put api data in state when api is called', () => {
    const wrapper = mount(<App />);

    expect(wrapper.state('weatherData')).toEqual(null)
    expect(wrapper.state('location')).toEqual({city: '', state: ''})
    expect(wrapper.state('welcomePage')).toEqual(true)
    expect(localStorage.getItem('city')).toEqual(undefined)
    expect(localStorage.getItem('state')).toEqual(undefined)

    wrapper.instance().getWeather = jest.fn((c, s) => {
      localStorage.setItem('city', c);
      localStorage.setItem('state', s);
      wrapper.setState({weatherData: dataClean(MockData)})
    });

    wrapper.instance().setLocation('Denver', 'Colorado')

    expect(wrapper.state('weatherData')).toEqual(dataClean(MockData))
    expect(wrapper.state('location')).toEqual({city: 'Denver', state: 'Colorado'})
    expect(wrapper.state('welcomePage')).toEqual(false)
    expect(localStorage.getItem('city')).toEqual('Denver')
    expect(localStorage.getItem('state')).toEqual('Colorado')

  })


});
