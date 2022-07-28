import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SearchField } from '../SearchField';
import { Table } from '../Table';
import { Pagination } from '../Pagination';

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 72px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;
`;

const URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'XXX';

const App = () => {
  const [data, setData] = useState<any>([]);
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
      <Table content={data} />
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
    </StyledContainer>
  );
}

export default App;