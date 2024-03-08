import { tButton } from "ts/types";

export type tHomePageHero = {
  title: string;
  slogan: string;
  buttons: { button: tButton }[];
  video: string;
  socials: {
    link: string;
  }[];
};
