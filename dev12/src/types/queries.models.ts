import { tImage } from "ts/types";

export type tQueryHomePage = {
  about_us: {
    title: string;
    content: string;
    button: {
      url: string;
      title: string;
      target: string;
    };
  };
  blog: {
    title: string;
    content: string;
    button: {
      url: string;
      title: string;
      target: string;
    };
  };
  hero: {
    title: string;
    slogan: string;
    image: tImage;
    buttons: {
      button: {
        url: string;
        title: string;
        target: string;
      };
    }[];
  };
  projects: {
    title: string;
    content: string;
    button: {
      url: string;
      title: string;
      target: string;
    };
  };
  services: {
    title: string;
  };
  statistics: {
    title: string;
    content: string;
    positions: {
      label: string;
      value: number;
    }[];
  };
};
