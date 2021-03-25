import React from 'react';
import { render } from '@testing-library/react';
import Subtitle from './index';

it("renders correclty", () => {
  const { getByText } = render(<Subtitle>teste</Subtitle>);
  
  expect(getByText('teste')).toBeTruthy();
})