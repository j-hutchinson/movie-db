import styled from "styled-components";
import { Button } from '@mui/material';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

interface Props {
    currentPage: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ currentPage, totalPages, setPage }) => (
    <StyledContainer>
        <Button
            variant="outlined"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
        >
            Prev
        </Button>
        <Button
            variant="outlined"
            onClick={() => { console.log('click'); setPage(currentPage + 1) }}
            disabled={currentPage === totalPages}
        >
            Next
        </Button>
    </StyledContainer>
)