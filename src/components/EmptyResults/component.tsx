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
    width: 210px;
`;


export const EmptyResults = () => (
    <>
        <p>Search for movies to find what you should watch next...</p>
        <StyledContainer>
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
        </StyledContainer>
    </>
)