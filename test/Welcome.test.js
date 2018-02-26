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
  })
})
