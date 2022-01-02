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

//Delete item button is present 
test('renders delete item button', () => {
  render(<App />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  expect(deleteButton).toBeInTheDocument();
});

//Edit item button is present 
test('renders edit item button', () => {
  render(<App />);
  const editButton = screen.getAllByText(/Edit/i)[0];
  expect(editButton).toBeInTheDocument();
});

//Menu item cards are present 
test("menu item cards are present", () => {
  render(<App />);
  const itemCards = screen.getAllByTestId("menu-item-card")
  expect(itemCards).toBeTruthy()
});

//Correct number of menu items are displayed
test("All of the default lunch items are displayed", () => {
  render(<App />);
  const itemCard = screen.getAllByTestId("menu-item-card")
  expect(itemCard).toHaveLength(6)
});

