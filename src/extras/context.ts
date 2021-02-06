import { createContext } from 'react';

export interface AppConfig{
    skin: "fresh" | "envolve";
    mode : "light" | "dark";
    title: string
}

export const DefaultConfig: AppConfig = {skin: 'fresh', mode: 'light', title: 'Hello World'};
export const OptionDark: AppConfig = {skin: 'fresh', mode: 'dark', title: 'Hello World'};

export const AppContext = createContext<AppConfig>(DefaultConfig);