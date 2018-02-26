import React from 'react';
import { mount, shallow} from 'enzyme';
import TenDay from '../lib/scripts/TenDay';
import Card from '../lib/scripts/Card';


describe.skip('Ten Day Cards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TenDay />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
