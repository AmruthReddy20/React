import NavItem from './NavItem';
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Icon1 } from '../../../Icons';
test('check whether text render', () => {
  render(<NavItem children="child" />);
  const ele = screen.getByText('child');
  expect(ele).toBeInTheDocument();
});



test('check whether start Icon render', () => {
  render(<NavItem children="click" startIcon={<Icon1 />} />);
  const icon = screen.getByTestId('startIcon');
  expect(icon).toBeInTheDocument();
});

test('check whether End Icon render', () => {
  render(<NavItem endIcon={<Icon1 />} />);
  const icon = screen.getByTestId('endIcon');
  expect(icon).toBeInTheDocument();
});
