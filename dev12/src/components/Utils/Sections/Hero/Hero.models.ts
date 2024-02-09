import { tImage } from "ts/types";

export type tHero =
  | ({
      theme: "home";
    } & tHomePageHero)
  | {
      theme: "article";
    };

export type tHomePageHero = {
  title: string;
  slogan: string;
  image: tImage;
  buttons: {
    button: {
      target: string;
      title: string;
      url: string;
    };
  }[];
};
