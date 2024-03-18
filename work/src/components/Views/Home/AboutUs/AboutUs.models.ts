import { tCustomButton, tImage } from "ts/commons";

export type tAboutUs = {
  button: tCustomButton;
  content: string;
  image: tImage;
  team: {
    firstName: string;
    image: tImage;
    lastName: string;
    overview: string;
    works: string;
  }[];
  title: string;
  uri: string;
};
