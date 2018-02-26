import React from 'react';
import { mount, shallow} from 'enzyme';
import Card from '../lib/scripts/Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
