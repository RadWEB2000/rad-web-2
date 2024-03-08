import { tButton, tImage } from "ts/types";

export type tHomePageHero = {
  title: string;
  slogan: string;
  live?: string;
  buttons: { button: tButton }[];
  socials: {
    link: string;
  }[];
  video: string;
};

export type tHero = { theme: "home" } & tHomePageHero;
