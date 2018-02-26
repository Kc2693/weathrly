import React from 'react';
import { mount, shallow} from 'enzyme';
import Welcome from '../lib/scripts/Welcome';
import Search from '../lib/scripts/Search'


describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should have 2 divs, an h1, and a search component', () => {
    expect(wrapper.find('.welcome-page').type()).toEqual('div');
    expect(wrapper.find('.center-box').type()).toEqual('div');
    expect(wrapper.find('h1').type()).toEqual('h1');
    expect(wrapper.find('Search').length).toEqual(1);
  })
})
