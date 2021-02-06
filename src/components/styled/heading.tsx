import styled, { keyframes } from 'styled-components';

// define a title with styled component
export const Title = styled.h1`
    font-weight: 100;
    margin-top: 0;
    font-family: revert;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;
// define a title with styled component
export const SubTitle = styled.h2`
    text-align: center;
    font-weight: 100;
    margin-top: 0;
    font-family: revert;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;
