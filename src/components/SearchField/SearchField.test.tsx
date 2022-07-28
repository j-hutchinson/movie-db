import { render, screen } from '@testing-library/react';
import { SearchField } from './component';

test('renders hello world text', () => {
  const onChange = jest.fn();
  render(<SearchField onChange={onChange} />);
  const linkElement = screen.getByText(/Search the site/i)
  expect(linkElement).toBeInTheDocument();
});