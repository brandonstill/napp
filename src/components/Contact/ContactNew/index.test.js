import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContactNew } from './';
import Button from '@material-ui/core/Button';

describe('ContactNew', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<ContactNew classes={{container:''}} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('has correct default state', () => {
    const wrapper = shallow(<ContactNew classes={{container:''}} />).instance();
    const defaultState = { firstName: '', lastName: '', email: '' };
    expect(wrapper.state).toEqual(defaultState);
  });

  it('handleChange updates component state', () => {
    const wrapper = shallow(<ContactNew classes={{container:''}} />);
    wrapper.find('TextField[name="firstName"]').simulate('change', { target: { value: 'First Name' } });
    expect(wrapper.state('firstName')).toBe('First Name');
  });

  it('handleSubmit call saveContact action with component state', () => {
    const event = { preventDefault: jest.fn() };
    const spy = jest.fn();
    const wrapper = shallow(<ContactNew saveContact={spy} classes={{container:''}} />).instance();
    wrapper.handleSubmit(event);
    expect(spy).toHaveBeenCalledWith({ firstName: '', lastName: '', email: '' });
  });

  it('Submit button calls saveContact action', () => {
    const spy = jest.fn();
    const wrapper = mount(<ContactNew saveContact={spy} classes={{container:''}} />);
    wrapper.find('Button[name="submit"]').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

  it('Cancel button calls handleClose', () => {
    const spy = jest.fn();
    const wrapper = mount(<ContactNew handleClose={spy} classes={{container:''}} />);
    wrapper.find('Button[name="cancel"]').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

});