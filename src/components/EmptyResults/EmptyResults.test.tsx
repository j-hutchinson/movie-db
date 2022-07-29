import { render, screen } from '@testing-library/react';
import { EmptyResults } from './component';

test('renders hello world text', () => {
  render(<EmptyResults />);
  const textContent = screen.getByText(/Search for movies to find what you should watch next.../i)
  expect(textContent).toBeInTheDocument();
});