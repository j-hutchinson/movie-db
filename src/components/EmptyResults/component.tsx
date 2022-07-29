import styled from "styled-components"

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 16px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const GhostCard = styled.img`
    height: 320px;
    width: 210px;
`;


export const EmptyResults = () => (
    <>
        <StyledContainer>
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
            <GhostCard src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" />
        </StyledContainer>
        <p>Search for movies to find what you should watch next...</p>
    </>
)