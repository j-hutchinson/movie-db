import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { SearchField } from '../SearchField';
import { EmptyState } from '../EmptyState';
import { Gallery } from '../Gallery';
import { Pagination } from '../Pagination';
import { useMoviesFetch } from '../../hooks/useMoviesFetch'

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 72px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>(null);
  const [page, setPage] = useState<number>(1);
  const [movies, totalPages, totalResults] = useMoviesFetch(searchTerm, page);

  const debouncedSearch = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event);
  }

  return (
    <StyledContainer>
      <SearchField onChange={handleChange} />
      {movies.length ?
        <>
          <Gallery content={movies} />
          <Pagination setPage={setPage} totalPages={totalPages} />
        </> :
        <EmptyState isEmpty={totalResults === 0} />}
    </StyledContainer>
  );
}

export default App;
