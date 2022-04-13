import Lists from './Lists'; 
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('check if renders',  () => {
  render(<Lists />);
//   const labelElement = screen.getAllByTitle("ListItem");
//   expect(labelElement).toBeInTheDocument();
});
