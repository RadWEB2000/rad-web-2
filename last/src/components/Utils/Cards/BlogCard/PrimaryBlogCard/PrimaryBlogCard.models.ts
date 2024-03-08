import { tImage } from "ts/types";

export type tPrimaryBlogCard = {
  title: string;
  uri: string;
  image: tImage;
  excerpt: string;
  date: string;
  categories: {
    name: string;
    uri: string;
  }[];
};
