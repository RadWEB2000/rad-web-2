import { ReactElement } from "react";
export interface IntServiceCard {
    button:string;
    cards?:{
        path:string;
        title:string;
    }[];
    content:string;
    isHome:boolean;
    path:string;
    title:string;
}
export interface IntServiceCardCss {
    color:string;
    isBig:boolean;
}