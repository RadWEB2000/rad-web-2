import { tImage } from "ts/types";

export type tPrimaryProjectCard = {
  button: string;
  title: string;
  uri: string;
  featuredImage: {
    node: tImage;
  };
  excerpt: string;
  page_project_article: {
    industry: string;
  };
};
