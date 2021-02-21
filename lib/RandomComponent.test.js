import React from 'react';
import renderer from 'react-test-renderer';
import { RandomComponent } from '.';

it('renders correctly', () => {
  const tree = renderer.create(<RandomComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
