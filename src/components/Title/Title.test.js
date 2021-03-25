import React from 'react';
import { render } from '@testing-library/react';
import Title from './index';
import * as Color from 'styles/colors.module.scss';

const sizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const colors = Object.keys(Color);

it("renders correclty", () => {
  const { getByText } = render(<Title>teste</Title>);
  expect(getByText('teste')).toBeTruthy();
})

it("should have margin 0 when next item is subtitle", () => {
  const { getByText } = render(<Title subtitle>teste</Title>);
  expect(getByText('teste')).toHaveStyle('margin-bottom: 0');
})

sizes.map(size => {
  it(`should have size ${size}`, () => {
    const { getByText } = render(<Title size={size}>teste</Title>);
    expect(getByText('teste').tagName.toLowerCase()).toBe(size);
  })
})

colors.map(color => {
  it(`should have color ${color}`, () => {
    const { getByText } = render(<Title color={color}>teste</Title>);
    expect(getByText('teste')).toHaveClass(`c-${color}`)
  })
})