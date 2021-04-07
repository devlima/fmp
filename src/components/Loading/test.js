import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

it("renders correclty", () => {
  const { container } = render(<Loading />);
  expect(container.children[0]).toBeTruthy();
})

it("should have fixed class", () => {
  const { container } = render(<Loading fixed />);
  expect(container.children[0]).toHaveClass('fixed');
})