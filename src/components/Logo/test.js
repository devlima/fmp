import React from 'react';
import { render } from '@testing-library/react';
import Logo from './index';

it("renders correclty", () => {
  const { queryByTitle } = render(<Logo />);

  expect(queryByTitle('Football Manager Planner')).toBeTruthy();
})