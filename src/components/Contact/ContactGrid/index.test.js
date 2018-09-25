import React from 'react';
import { shallow } from 'enzyme';
import ContactGrid from './';

describe('ContactNav', () => {
  const contacts = [{
    _id: "5ba6ded814f01c02d31cc886",
    email: "email@email.com",
    firstName: "First",
    lastName: "Last"
  }, 
  {
    _id: "5ba6ded814f01c02d31cc887",
    email: "zmail@zmailz.com",
    firstName: "Name",
    lastName: "Nomma"
  }];

  it('renders correctly', () => {
    const wrapper = shallow(<ContactGrid contacts={contacts} sortBy={'lastName'} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});