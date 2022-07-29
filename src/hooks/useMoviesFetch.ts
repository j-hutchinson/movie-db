import axios from 'axios';
import { useEffect, useState } from 'react';
import { Content } from '../components/types';

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '24f92b43eac6893aa2f21e387f997699';

type Response = {
    results: Content[]
    total_pages: number,
    total_results: number,
}


export function useMoviesFetch(
    searchTerm: string,
    page: number,
): [Content[], number, number] {
    const [movies, setMovies] = useState<Content[]>([]);
    const [totalPages, setTotalPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState<number>(null);

    useEffect(() => {
        (async function () {
            if (searchTerm?.length > 2) {
                try {
                    const fetchedData = await axios.get<Response>(`${URL}?api_key=${API_KEY}&query=${searchTerm}&page=${page}`);
                    setMovies(fetchedData?.data.results);
                    setTotalPage(fetchedData?.data.total_pages);
                    setTotalResults(fetchedData?.data.total_results);
                } catch (e) {
                    console.log(e);
                }
            }
        })();
    }, [searchTerm, page]);

    return [movies, totalPages, totalResults];
}