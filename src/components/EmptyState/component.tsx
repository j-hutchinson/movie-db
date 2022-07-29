import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledPara = styled.p`
    margin: 0 48px;
    text-align: center;
`;
const GhostCard = styled.img`
    height: 320px;
    width: 320px;
`;

interface Props {
    isEmpty: boolean;
}

export const EmptyState: React.FC<Props> = ({ isEmpty }) => (
    <>
        {isEmpty ?
            <StyledPara>No movies found for this search. Please try again</StyledPara> :
            <StyledPara>Search for movies to find what you should watch next...</StyledPara>
        }
        <StyledContainer>
            <GhostCard src='https://nofilmschool.com/sites/default/files/styles/structured_4x3/public/michael_jackson_popcorn.jpg?itok=VgTV0eca' />
        </StyledContainer>
    </>
)