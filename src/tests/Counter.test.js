// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const value = screen.getByTestId('count');
  expect(value).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  const value = screen.getByTestId('count');
  expect(value).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  const value = screen.getByTestId('count');
  expect(value).toHaveTextContent(-1);
});
