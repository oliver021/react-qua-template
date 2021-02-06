import { ReactNode } from 'react';

export interface StdProps{
    className?: string;
    children: ReactNode;
}


/**
 * @description properties of the column component
 */
export interface ColumnProps{
    md?: number;
    xs?: number;
    lg?: number;
    sm?: number;
    offset?: number;
    maxContent?: boolean;
    height?: string | number;
    bg?: string;
}

/**
 * @description the flex types, this is util to define autocomplete with IDE and validate the correct values
 */
export type FlexDirectionType = "column" | "column-reverse" | "row" | "row-reverse";
export type FlexAlign = "baseline" | "center" | "flex-start" | "flex-end" | "stretch";
export type FlexJustify = "end" | "center" | "flex-start" | "flex-end";
export type FlexContent = "end" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around";

/**
 * @abstract FlexboxProp
 * @description represent the flex properties to define the flex design
 */
export interface FlexboxProp {
    direction: FlexDirectionType;
    align: FlexAlign;
    alignContent?: FlexContent;
    wrap?: boolean;
    justify?: FlexJustify;
}

/**
 * @abstract ButtonProps
 * @description define the basic button parameters
 */
export interface ButtonProps{
    mode?: "round" |"std" | "block" ;
    size?: "big" | "normal" | "small";
}