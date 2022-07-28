import styled from 'styled-components';
import { TextField } from '@mui/material'

const StyledForm = styled.form`
    display: flex;
    gap: 16px;
    flex-direction: row;
    align-items: center;
`;

interface Props {
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: React.FC<Props> = (props) => (
    <StyledForm>
        <label htmlFor="site-search">Search the site:</label>
        <TextField type="search" id="site-search" name="q" placeholder="Search for..." {...props} variant="standard" />
    </StyledForm>
);