export const movieMock = {
    title: 'Captain America',
    adult: false,
    backdrop_path: 'backdrop',
    genre_ids: [12],
    id: 1,
    original_language: 'en',
    original_title: 'Captain America',
    overview: 'Super soldier',
    popularity: 10,
    poster_path: 'over-here.jpg',
    release_date: '2022 04 10',
    video: false,
    vote_average: 6,
    vote_count: 1234,
};

export const movies = [
    movieMock,
    {
        ...movieMock,
        id: 2
    }
]