import { MouseEventHandler } from 'react';
export interface IntItem {
    handleButton?:MouseEventHandler;
    handleMenu:MouseEventHandler;
    path:string;
    title:string;
    variant:'submenu'|'expand'|'regular';
}