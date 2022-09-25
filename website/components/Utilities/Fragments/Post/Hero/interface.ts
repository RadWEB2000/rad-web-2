import { tStack } from "../../StackTechnology/interface";
export interface IntHero {
    children:string;
    image:string;
    release?:string;
    stack?:tStack[];
    title:string;
}