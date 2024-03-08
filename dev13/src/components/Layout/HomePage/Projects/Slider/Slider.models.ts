import { tImage } from "ts/types";

export type tSlider = {
  button: string;
  cards: {
    title: string;
    uri: string;
    featuredImage: {
      node: tImage;
    };
    excerpt: string;
    page_project_article: {
      industry: string;
    };
  }[];
};
