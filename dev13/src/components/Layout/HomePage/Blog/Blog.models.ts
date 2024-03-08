import { tButton, tImage } from "ts/types";

export type tBlog = {
  title: string;
  overview: string;
  content: string;
  button: tButton;
  posts: {
    title: string;
    uri: string;
    featuredImage: {
      node: tImage;
    };
    excerpt: string;
    date: string;
    categories: {
      nodes: {
        name: string;
        uri: string;
      }[];
    };
  }[];
};
