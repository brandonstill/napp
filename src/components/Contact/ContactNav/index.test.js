import React from 'react';
import { shallow } from 'enzyme';
import ContactNav from './';

describe('ContactNav', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContactNav />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});