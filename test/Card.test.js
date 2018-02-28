import React from 'react';
import { mount, shallow} from 'enzyme';
import Card from '../lib/scripts/Card';


describe('Card', () => {
  let wrapper;
  const props = {
                hour:'7',
                img: 'asdf',
                temp: '50'
              };

  beforeEach(() => {
    wrapper = shallow(<Card {...props}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a class name', () => {
    expect(wrapper.find('.card')).toBeDefined()
  });

  it('should receive data from the props object', () => {
    wrapper = mount(<Card {...props} />)
    expect(wrapper.props().hour).toBeDefined();
    expect(wrapper.props().img).toBeDefined();
    expect(wrapper.props().temp).toBeDefined();
  });

  it('should have the data on the card', () => {
    wrapper = mount(<Card {...props} />)

    expect(wrapper.find('h5').first().text()).toEqual('7')
    expect(wrapper.find('img').first().prop('src')).toEqual('asdf')
    expect(wrapper.find('h5').last().text()).toEqual('50')
  });

})
