import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useMoviesFetch } from './useMoviesFetch';
import { waitFor } from '@testing-library/react';
import { movies } from '../__mocks__/moviesMock';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useRoveFocus', () => {
    const searchTerm = 'marvel';
    const page = 1;

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should return movies and totalPages', () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { results: movies, total_pages: 2, total_results: 2 } })
        const { result } = renderHook(() => useMoviesFetch(searchTerm, page));

        expect(mockedAxios.get).toHaveBeenCalledTimes(1);

        waitFor(() => {
            expect(result.current[0]).toBe(movies);
            expect(result.current[1]).toBe(2);
            expect(result.current[2]).toBe(2);
        })
    });
    it('should not call axios when searchTerm is less than 3 characters', () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { results: movies, total_pages: 1, total_results: 2 } })
        renderHook(() => useMoviesFetch('fo', page));
        expect(mockedAxios.get).toHaveBeenCalledTimes(0);
    });
});