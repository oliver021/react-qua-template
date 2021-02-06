import styled, { css } from 'styled-components';
import { delta } from './animations';


// create a animation with css
const animatedCss = css`
    &:hover {
        animation: ${delta} 0.8s infinite alternate-reverse; 
    }
`;

// define a boxshadow color to elements button in focus
const showdowColor = "111,111,111,0.4";

// button to contain a icon
export const IconButton = styled.button`
    width: 32px;
    height: 32px;
    border: 0;
    margin: 1px 8px 8px 1px; 
    padding: 4px;
    background-color: rgba(220, 220, 230, 0.5);
    cursor: pointer;
    border-radius: 50%;
    ${(props: {animated?: boolean} ) => props.animated ? animatedCss : ""}

    &:focus{
        border: 0px;
        box-shadow: 2px 2px 3.5px rgba(${showdowColor}),  -2px -2px 3.5px rgba(${showdowColor});
    }
`;

// export an div with scroll
export const Scroll = styled.div`
        overflow: auto;
        width: 100%;
        margin: 0;
        padding: 0;
        height: ${(props: {height: string}) => props.height};
`; 