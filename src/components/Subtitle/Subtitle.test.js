import React from 'react';
import { render } from '@testing-library/react';
import Subtitle from './index';
import * as Color from 'styles/colors.module.scss';

const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const colors = Object.keys(Color);

it("renders correclty", () => {
  const { getByText } = render(<Subtitle>teste</Subtitle>);
  
  expect(getByText('teste')).toBeTruthy();
})

sizes.map(size => {
  it(`should have size ${size}`, () => {
    const { getByText } = render(<Subtitle size={size}>teste</Subtitle>);
    expect(getByText('teste')).toHaveClass(size);
  })
})

colors.map(color => {
  it(`should have color ${color}`, () => {
    const { getByText } = render(<Subtitle color={color}>teste</Subtitle>);
    expect(getByText('teste')).toHaveClass(`c-${color}`)
  })
})