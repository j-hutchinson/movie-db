import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SearchField } from '../SearchField';
import { Gallery } from '../Gallery';
import { Pagination } from '../Pagination';
import { Content } from '../types';

const StyledContainer = styled.div`
  max-width: 1024px;
  margin: 72px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '24f92b43eac6893aa2f21e387f997699';

const App = () => {
  const [data, setData] = useState<Content[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('transformers');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPage] = useState<number>(1);

  useEffect(() => {
    (async function () {
      try {
        const fetchedData = await axios({
          method: 'get',
          url: `${URL}?api_key=${API_KEY}&query=${searchTerm}&page=${page}`
        });
        setData(fetchedData?.data.results);
        setTotalPage(fetchedData?.data.total_pages);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [searchTerm, page]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchTerm(event.target.value);
    }, 1000);
  }

  return (
    <StyledContainer>
      <SearchField onChange={onSearchChange} />
      <Gallery content={data} />
      <Pagination setPage={setPage} totalPages={totalPages} />
    </StyledContainer>
  );
}

export default App;