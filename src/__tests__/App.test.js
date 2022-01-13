import { render } from '@testing-library/react';
import App from '../App';

jest.mock('../components/ShowError.js', () => () => (
  <div data-testid='error-comp' />
));
jest.mock('../components/LoadingSpinner.js', () => () => (
  <div data-testid='loading-comp' />
));
jest.mock('../components/Search.js', () => () => (
  <div data-testid='search-comp' />
));

test('should render search componenet', () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId(/seach-comp/)).toBeInTheDocument();
});

test('should render loading componenet', () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId(/seach-comp/)).toBeInTheDocument();
});

test('should render error componenet', () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId(/seach-comp/)).toBeInTheDocument();
});
