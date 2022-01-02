import { render, screen } from '@testing-library/react';
import App from './App';

//App title is present 
test('renders App Title', () => {
  render(<App />);
  const appTitle = screen.getByText(/Menu Management/i);
  expect(appTitle).toBeInTheDocument();
});

//Add item button is present 
test('renders add item button', () => {
  render(<App />);
  const addButton = screen.getByText(/Add New Item/i);
  expect(addButton).toBeInTheDocument();
});





