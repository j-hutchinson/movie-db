import { render, screen } from '@testing-library/react';
import { EmptyState } from './component';

describe('EmptyState', () => {
  it.each`
    isEmpty  | text
    ${true}  | ${'No movies found for this search. Please try again'}
    ${false} | ${'Search for movies to find what you should watch next...'}
  `('renders correct text when based on if the search has been performed or not', ({ isEmpty, text }) => {
    render(<EmptyState isEmpty={isEmpty} />);
    const textContent = screen.getByText(text)
    expect(textContent).toBeInTheDocument();
  });
});