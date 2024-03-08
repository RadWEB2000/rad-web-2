import { tImage } from "ts/types";

export type tPrimaryBlogCard = {
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
};
