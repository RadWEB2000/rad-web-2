import { tImage } from "ts/commons";

export type tPrimaryProjectCard = {
    button:string;
    categories: string[];
    direction:"left"|"right";
    excerpt: string;
    image: tImage;
    title: string;
    uri: string;
}