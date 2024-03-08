import { tButton, tImage } from "ts/types";

export type tProjects = {
  title: string;
  content: string;
  image: tImage;
  button: tButton;
  slider: {
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
};
