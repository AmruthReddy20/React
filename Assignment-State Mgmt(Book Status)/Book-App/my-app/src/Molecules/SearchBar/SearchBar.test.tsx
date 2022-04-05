import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchBar from './SearchBar';

import '@testing-library/jest-dom';

it('checks whether the component renders properly', () => {
  render(<SearchBar />);
});

it('checks the placeholder text', () => {
  render(<SearchBar/>);
  const element = screen.getByPlaceholderText(
    'Search by title or author'
  );
  expect(element).toBeInTheDocument();
});
