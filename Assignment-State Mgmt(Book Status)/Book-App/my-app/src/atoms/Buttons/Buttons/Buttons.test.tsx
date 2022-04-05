import Buttons from './Buttons';
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

test('renders button click',  () => {
  render(<Buttons children="amruth" />);
  const labelElement = screen.getByText("amruth");
  expect(labelElement).toBeInTheDocument();
  const buttonElement=screen.getByRole("button");
  fireEvent.click(buttonElement);
});

  

// test('renders button click Title',  () => {
//     render(<Buttons children="amruth" />);
//     const labelElement = screen.getByTitle("Header")
//     expect(labelElement).toBeInTheDocument();
//   });

//   test('renders button Test id',  () => {
//     render(<Buttons children="amruth" />);
//     const labelElement = screen.queryByText("test-id")
//     expect(labelElement).not.toBeInTheDocument();
//   });

//   test('renders button Test id 3',  () => {
//     render(<Buttons children="amruth" />);
//     const labelElement =  screen.queryByText("Header")
//     expect(labelElement).not.toBeInTheDocument();
//   });

//   test('renders By Role',  () => {
//     render(<Buttons children="amruth" />);
//     const labelElement =  screen.getAllByRole("Header")
//     expect(labelElement.length).toBe(2);
//   });
  