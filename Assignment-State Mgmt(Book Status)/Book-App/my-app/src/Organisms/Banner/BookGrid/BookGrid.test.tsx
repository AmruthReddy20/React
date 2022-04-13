import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookGrid from './BookGrid';
import '@testing-library/jest-dom';
import Buttons from '../../../atoms/Buttons/Buttons/Buttons';

test('checks whether component renders', () => {
  render(
      <BookGrid children={<Buttons children="click me" />} />
  );
  const grid = screen.getByTestId('grid_container');
  expect(grid).toBeInTheDocument();
});
