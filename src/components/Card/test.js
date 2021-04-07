import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Card from './index';

beforeEach(cleanup)

it("renders correclty", () => {
  const { getByText } = render(<Card title="teste-titulo">teste</Card>);
  expect(getByText('teste-titulo')).toBeTruthy();
  expect(getByText('teste')).toBeTruthy();
})

it("full version must have full class", () => {
  const { getByTestId } = render(<div data-testid="cardFull" ><Card full title="teste-titulo">teste</Card></div>);
  expect(getByTestId('cardFull').children[0]).toHaveClass('full');
})