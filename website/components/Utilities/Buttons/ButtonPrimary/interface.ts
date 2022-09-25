import { MouseEventHandler } from "react";
export interface IntButtonPrimary {
    download?:boolean;
    handle?:MouseEventHandler;
    path?:string;
    title:string;
}