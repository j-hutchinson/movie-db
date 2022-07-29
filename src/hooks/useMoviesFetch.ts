import axios from 'axios';
import { useEffect, useState } from 'react';
import { Content } from '../components/types';

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '24f92b43eac6893aa2f21e387f997699';

export function useMoviesFetch(
    searchTerm: string,
    page: number,
): [Content[], number] {
    const [movies, setMovies] = useState<Content[]>([]);
    const [totalPages, setTotalPage] = useState<number>(1);

    useEffect(() => {
        (async function () {
            if (searchTerm?.length > 2) {
                try {
                    const fetchedData = await axios.get(`${URL}?api_key=${API_KEY}&query=${searchTerm}&page=${page}`);
                    setMovies(fetchedData?.data.results);
                    setTotalPage(fetchedData?.data.total_pages);
                } catch (e) {
                    console.log(e);
                }
            }
        })();
    }, [searchTerm, page]);

    return [movies, totalPages];
}