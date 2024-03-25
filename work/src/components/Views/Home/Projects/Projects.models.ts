import { tCustomButton, tImage } from "ts/commons";

export type tProjects = {
  title: string;
  button: tCustomButton;
  buttonCard: string;
  cards: {
    title: string;
    image: tImage;
    uri: string;
    categories: string[];
    excerpt: string;
  }[];
};
