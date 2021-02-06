import styled from 'styled-components';
import { ColumnProps, FlexboxProp } from '../../types';

// row or wrapper in some cases
export const Row = styled.div`
    content: "";
    clear: both;
    ${(props: {tableMode?:boolean}) => props.tableMode ? "display:table;" : ""}
`;

// column is util for many scenaries
export const Column = styled.div`
    float: left;
    ${(props: ColumnProps) => props.bg ? "background-color:"+(props.bg)+";" : ""}
    ${(props: ColumnProps) => !props.offset ? "" : "margin-left: "+(props.offset * 8.33)+"%"}
    height: ${(props: ColumnProps) => props.maxContent ? "100hv" : (props.height !== undefined ? props.height : "auto")};
    width: ${(props: ColumnProps) => props.xs ? props.xs * 8.33 : 100 }%;

    @media only screen and (min-width: 1200px){
        width: ${(props: ColumnProps) => props.lg ? props.lg * 8.33 : 100 }%;
    }

    @media only screen and (min-width: 992px){
        width: ${(props: ColumnProps) => props.md ?  props.md * 8.33 : 100 }%;
    }

    @media only screen and (min-width: 768px){
        width: ${(props: ColumnProps) => props.sm ? props.sm * 8.33 : 100 }%;
    }
`;

// create a felxbox container
export const FlexRow = styled.div`
    display: flex;
    flex-direction: ${(props: FlexboxProp) => props.direction};
    align-items: ${(props: FlexboxProp) => props.align};
    ${(props: FlexboxProp) => props.alignContent ? "align-content: " +(props.alignContent)+";" : ""}
    ${(props: FlexboxProp) => props.wrap ? "flex-wrap: wrap;" : ""}
    ${(props: FlexboxProp) => props.justify ? "justify-content: "+(props.justify)+";" : ""}
`;