import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
  it('should render layout', () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });
});