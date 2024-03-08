import { tButton, tImage } from "ts/types";

export type tQueryHomePage = {
  page: {
    about_us: {
      title: string;
      overview: string;
      image: tImage;
      content: string;
      button: tButton;
    };
    blog: {
      title: string;
      overview: string;
      button: tButton;
      content: string;
    };
    directonary: {
      title: string;
      button: tButton;
      content: string;
    };
    faq: {
      title: string;
      image: tImage;
      cards: {
        question: string;
        answer: string;
      }[];
    };
    hero: {
      title: string;
      slogan: string;
      buttons: tButton[];
    };
    how_we_works: {
      title: string;
      image: tImage;
      values: {
        icon: tImage;
        content: string;
        title: string;
      }[];
    };
    projects: {
      title: string;
      content: string;
      button: tImage;
      image: tImage;
    };
    services: {
      title: string;
      content: string;
      button: tImage;
    };
  };
  posts: any;
  settings: {
    socials: {
      link: string;
    }[];
  };
};

export type tQueryHomePageArticles = {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: {
    node: tImage;
  };
  date: string;
  categories: {
    nodes: {
      name: string;
      uri: string;
    }[];
  };
};
