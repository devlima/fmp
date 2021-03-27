import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Card from './index';

beforeEach(cleanup)

it("renders correclty", () => {
  const { getByText } = render(<Card title="teste-titulo">teste</Card>);
  // expect(getByText('teste-titulo')).toBeTruthy();
  expect(getByText('teste')).toBeTruthy();
})

it("full version must have max-width: inherit", () => {
  const { getByText, debug } = render(<Card data-testid="cardFull" full title="teste-titulo">teste</Card>);
  expect(getByText('teste')).toHaveClass('full');
})