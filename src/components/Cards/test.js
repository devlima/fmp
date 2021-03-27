import React from 'react';
import { render } from '@testing-library/react';
import Cards from './index';

it("renders correclty", () => {
  const { getByText } = render(<Cards>teste</Cards>);
  expect(getByText('teste')).toBeTruthy();
})