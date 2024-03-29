import { tImage } from "ts/commons";

export type tSlider = {
    button:string;
    cards: {
        title: string;
        image: tImage;
        uri: string;
        categories: string[];
        excerpt: string;
    }[];
}

export type tSliderButton = {
    handle:() => void;
    direction:"left"|"right";
    icon:JSX.Element;
}