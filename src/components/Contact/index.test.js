import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from './index.js';
import ContactNew from './ContactNew';
import { Paper } from '@material-ui/core';

describe('Contacts', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Contact fetchContacts={() => {}} classes={{paper:''}} />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('should call fetchContacts action', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Contact fetchContacts={spy} classes={{paper:''}} />);
    expect(spy).toHaveBeenCalled();
  });

  it('to have correct sortBy state', () => {
    const wrapper = shallow(<Contact fetchContacts={() => {}} classes={{paper:''}} />).instance();
    expect(wrapper.state.sortBy).toEqual('lastName');
  });

  it('handleSort updates component state', () => {
    const wrapper = shallow(<Contact fetchContacts={() => {}} classes={{paper:''}} />).instance();
    wrapper.handleSort({ target: { value: 'firstName' } });
    expect(wrapper.state.sortBy).toEqual('firstName');
  });

  it('handleOpen calls contactModal action with true', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Contact fetchContacts={() => {}} contactModal={spy} classes={{paper:''}} />).instance();
    wrapper.handleOpen();
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('handleClose calls contactModal action with false', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Contact fetchContacts={() => {}} contactModal={spy} classes={{paper:''}} />).instance();
    wrapper.handleClose();
    expect(spy).toHaveBeenCalledWith(false);
  });

});