import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    padding: 8px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr;
        margin: 0 80px;
    }
`;


export const StyledItem = styled.div`
    font-size: 16px;
`;

export const CellContainer = styled.div`
    display: grid;
    grid-template-rows: 340px 60px;
    padding: 12px 16px;

    p {
        margin: 0;
        color: #525254;
    }
`;

export const StyledImage = styled.img`
    height: 320px;
    width: 210px;
    margin: 0 auto;
`;

export const StyledImageHolder = styled.div`
    position: relative;
`;

export const StyledRating = styled.span`
    position: absolute;
    background: #74D6AA;
    padding: 4px 6px;
    border-radius: 999px;
    left: 8px;
    top: 8px;
`;
