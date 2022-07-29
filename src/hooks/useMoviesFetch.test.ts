import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useMoviesFetch } from './useMoviesFetch';
import { waitFor } from '@testing-library/react';
import { movies } from '../__mocks__/moviesMock';

jest.mock("axios");

describe('useRoveFocus', () => {
    const searchTerm = 'marvel';
    const page = 1;

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should return movies and totalPages', () => {
        axios.get.mockResolvedValueOnce({ data: { results: movies, total_pages: 2 } })
        const { result } = renderHook(() => useMoviesFetch(searchTerm, page));

        expect(axios.get).toHaveBeenCalledTimes(1);

        waitFor(() => {
            expect(result.current[0]).toBe(movies);
            expect(result.current[1]).toBe(2);
        })
    });
    it('should not call axios when searchTerm is less than 3 characters', () => {
        axios.get.mockResolvedValueOnce({ data: { results: movies, total_pages: 1 } })
        renderHook(() => useMoviesFetch('fo', page));
        expect(axios.get).toHaveBeenCalledTimes(0);
    });
});