import styled from "styled-components"

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }

    p {
        margin: 16px;
        text-align: center;
    }
`;

const GhostCard = styled.img`
    height: 320px;
    width: 320px;
`;

const placeholderUrl = 'https://nofilmschool.com/sites/default/files/styles/structured_4x3/public/michael_jackson_popcorn.jpg?itok=VgTV0eca';

export const EmptyResults = () => (
    <>
        <p>Search for movies to find what you should watch next...</p>
        <StyledContainer>
            <GhostCard src={placeholderUrl} />
            <GhostCard src={placeholderUrl} />
            <GhostCard src={placeholderUrl} />
        </StyledContainer>
    </>
)