import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Menu Management/i);
  expect(linkElement).toBeInTheDocument();
});



