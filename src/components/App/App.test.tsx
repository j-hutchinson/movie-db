import { render, screen } from '@testing-library/react';
import App from './component';
import { useMoviesFetch } from '../../hooks/useMoviesFetch'
import { movies } from '../../__mocks__/moviesMock';

jest.mock('../../hooks/useMoviesFetch');
const mockUseMoviesFetch = useMoviesFetch as jest.MockedFunction<typeof useMoviesFetch>

describe("App", () => {
  it("renders with Empty Results page when no movies are available", () => {
    mockUseMoviesFetch.mockReturnValue([[], 1]);
    render(<App />);
    const element = screen.getByText('Search for movies to find what you should watch next...');
    expect(element).toBeInTheDocument();
  })

  it("renders with Gallery page when movies are available", () => {
    mockUseMoviesFetch.mockReturnValue([movies, 1]);
    render(<App />);
    const element = screen.getAllByTestId('gallery-item');
    expect(element).toHaveLength(2);
  })
})