import React from 'react';
import renderer from 'react-test-renderer';
import { RandomButtonComponent } from '.';

it('renders correctly', () => {
  const tree = renderer.create(<RandomButtonComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
