import { tButton, tImage } from "ts/types";

export type tBlog = {
  button: tButton;
  cards: {
    title: string;
    uri: string;
    image: tImage;
    excerpt: string;
    date: string;
    categories: {
      name: string;
      uri: string;
    }[];
  }[];
  content: string;
  overview: string;
  title: string;
};
