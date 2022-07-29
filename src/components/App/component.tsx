import styled from 'styled-components';
import { useState } from 'react';
import { SearchField } from '../SearchField';
import { EmptyResults } from '../EmptyResults';
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
  const [movies, totalPages] = useMoviesFetch(searchTerm, page);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 1000);
  }

  return (
    <StyledContainer>
      <SearchField onChange={onSearchChange} />
      {movies.length ?
        <>
          <Gallery content={movies} />
          <Pagination setPage={setPage} totalPages={totalPages} />
        </> :
        <EmptyResults />}
    </StyledContainer>
  );
}

export default App;
