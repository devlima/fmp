import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

it("renders correclty", () => {
  const { getByText } = render(<Card title="teste-titulo">teste</Card>);
  expect(getByText('teste-titulo')).toBeTruthy();
  expect(getByText('teste')).toBeTruthy();
})

it("full version must have full class", () => {
  const { container } = render(<Card full title="teste-titulo">teste</Card>);
  expect(container.children[0]).toHaveClass('full');
})