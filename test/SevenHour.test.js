import React from 'react';
import { mount, shallow} from 'enzyme';
import SevenHour from '../lib/scripts/SevenHour';
import Card from '../lib/scripts/Card';
import mockData from '../lib/scripts/MockData';


describe('Seven Hour Card', () => {
  let wrapper;
  const stuff = mockData.hourly_forecast;

  beforeEach(() => {
    wrapper = shallow(<SevenHour data={stuff}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should return 7 cards', () => {
    wrapper = mount(<SevenHour data={stuff} />);

    expect(wrapper.children().length).toEqual(7);
  });

  it('should have the data on cards', () => {
    wrapper = mount(<SevenHour data={stuff} />)

    expect(wrapper.find('h5').first().text()).toEqual('12:00 PM')
    expect(wrapper.find('img').first().prop('src')).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
    expect(wrapper.find('h5').last().text()).toEqual('Temp: 45℉')
  });
})
