import { StaticImageData } from 'next/image';

export type tImage = {
  altText: string;
  sourceUrl: string | StaticImageData;
  title?: string;
};

export type tBrand = {
  label: string;
  uri: string;
};

export type tSmallMenu = {
  buttons: {
    label: string;
    uri: string;
  }[];
  items: {
    label: string;
    uri: string;
  }[];
};

export type tBigMenu = {
  label: string;
  value: string;
  uri: string;
  submenu?:
    | {
        label: string;
        value?: string;
        uri: string;
        submenu?:
          | {
              label: string;
              uri: string;
            }[]
          | null;
      }[]
    | null;
};

export type tDesktopMenu = {
  name: string;
  title: string;
  items: {
    label: string;
    uri: string;
  }[];
};

export type tSocial = {
  label: string;
  url: string;
};
