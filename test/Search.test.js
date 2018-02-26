import React from 'react';
import { mount, shallow} from 'enzyme';
import Search from '../lib/scripts/Search';
import CompleteMe from '@wagasky/complete-me/lib/Trie.js'
import cityArray from '../lib/scripts/cityArray';


describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})
