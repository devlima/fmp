import React from 'react';
import { render } from '@testing-library/react';
import WageCap from './index';

it("renders correclty", () => {
  const { getByText } = render(<WageCap />);

  expect(getByText('Star')).toBeTruthy();
  expect(getByText('Important')).toBeTruthy();
  expect(getByText('Regular')).toBeTruthy();
  expect(getByText('Squad')).toBeTruthy();
  expect(getByText('Fringe')).toBeTruthy();
  expect(getByText('Prospect')).toBeTruthy();
  expect(getByText('Youth')).toBeTruthy();
})