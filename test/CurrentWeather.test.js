import React from 'react';
import { mount, shallow} from 'enzyme';
import CurrentWeather from '../lib/scripts/CurrentWeather';


describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
