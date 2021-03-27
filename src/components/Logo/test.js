import React from 'react';
import { render } from '@testing-library/react';
import Logo from './index';
import * as Color from 'styles/colors.module.scss';

const sizes = ['sm', 'md', 'lg'];
const colors = Object.keys(Color);

it("should render correctly on default (size: md, color: primary)", () => {
  const { queryByTitle } = render(<Logo />);
  expect(queryByTitle('Football Manager Planner')).toBeTruthy();
})

sizes.map(size => {
  it(`should have size ${size}`, () => {
    const { queryByTitle } = render(<Logo size={size} />);
    expect(queryByTitle('Football Manager Planner')).toHaveClass(size);
  })
})

colors.map(color => {
  it(`should have color ${color}`, () => {
    const { queryByTitle } = render(<Logo color={color} />);
    expect(queryByTitle('Football Manager Planner')).toHaveClass(`c-${color}`)
  })
})