import { tImage } from "ts/commons";

export type tServiceOverview = {
  title: string;
  cards: {
    title: string;
    icon: tImage;
  }[];
};
