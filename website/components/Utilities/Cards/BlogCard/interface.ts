export interface IntAuthor extends IntAuthorCss {
  image?: string;
  path: string;
  title: string;
}
export interface IntAuthorCss {
  isRecommended: boolean;
}
export interface IntAuthorObject {
  author: {
    image?: string;
    path: string;
    title: string;
  };
}
export interface IntBlogCard {
  content: string;
  image: string;
  isBig?:boolean;
  path: string;
  time:string|Date|number;
  title: string;
}
export interface IntBlogCardRecommended extends IntAuthorObject {
  path: string;
  title: string;
}
