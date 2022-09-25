import { MouseEventHandler } from 'react';
export interface IntSubmenu {
    handleMenu:MouseEventHandler;
    path:string;
    title:string;
    submenu:{
        path:{
            pl:string;
        };
        title:{
            pl:string;
        }
    }[];
}