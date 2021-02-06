import { createContext } from "react";

export interface ThemeParameters{
    primary: string,
    secondary: string
}

export const themes : {fresh: ThemeParameters, dark:ThemeParameters} = {
    "fresh":{
        primary: "white",
        secondary: "green"
    },
    "dark":{
        primary:"",
        secondary:""
    }
};

export const ThemeContext = createContext(themes.fresh); 