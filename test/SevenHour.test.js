import React from 'react';
import { mount, shallow} from 'enzyme';
import SevenHour from '../lib/scripts/SevenHour';
import Card from '../lib/scripts/Card';


describe.skip('Seven Hour Cards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
