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
  });

  it('should have an empty input and empty array of suggestions by default', () => {
    expect(wrapper.state('input')).toEqual('');
    expect(wrapper.state('suggestions')).toEqual([])
  });

  it('should have a handleChange and handleClick method', () => {
    expect(typeof wrapper.instance().saveInput).toEqual('function');
    expect(typeof wrapper.instance().handleClick).toEqual('function');
  });

  it('should render a button, input field, and datalist', () => {
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('datalist')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
  });

  it('should save the value of the input field to input state', () => {
    expect(wrapper.state().input).toEqual('');
    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}});

    expect(wrapper.state().input).toEqual('Denver, CO');
  });

  it('should add suggestions to state when inputs are entered', () => {
  expect(wrapper.state('suggestions')).toEqual([])
  wrapper.find('input').simulate('change', {target: {value: 'Denver'}});


  expect(wrapper.state('suggestions')).toEqual([ 'denver, co' ])
})

  it('should add multiple suggestions to state based on input', () => {
    expect(wrapper.state('suggestions')).toEqual([])
    wrapper.find('input').simulate('change', {target: {value: 'red'}});

    expect(wrapper.state('suggestions').length).toEqual(5)
  })

  it('should not add suggestions to state for inputs less than 3', () => {
    expect(wrapper.state('suggestions')).toEqual([])
    wrapper.find('input').simulate('change', {target: {value: 're'}});

    expect(wrapper.state('suggestions').length).toEqual(0)
  })
})
