import { render, screen } from '@testing-library/react';
import { EmptyResults } from './component';

describe('EmptyResults', () => {
  it.each`
    isEmpty  | text
    ${true}  | ${'No movies found for this search. Please try again'}
    ${false} | ${'Search for movies to find what you should watch next...'}
  `('renders correct text when based on if the search has been performed or not', ({ isEmpty, text }) => {
    render(<EmptyResults isEmpty={isEmpty} />);
    const textContent = screen.getByText(text)
    expect(textContent).toBeInTheDocument();
  });
});