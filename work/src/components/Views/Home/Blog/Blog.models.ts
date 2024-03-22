import { tCustomButton, tPost } from "ts/commons";

export type tBlog = {
  title: string;
  button: tCustomButton;
  content: {
    base: string;
    additional: string;
  };
  posts: tPost[];
};
