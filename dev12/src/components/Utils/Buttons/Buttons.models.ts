import { tImage } from "ts/types";

export type tButtons = { theme: "primary" } & tPrimaryButton;

export type tPrimaryButton = {
  mode: "dark" | "light";
  label: string;
  target: string;
  rel:
    | "index nofollow"
    | "noindex follow"
    | "noindex nofollow"
    | "index follow"
    | "index"
    | "follow"
    | "noindex"
    | "nofollow";
  uri: string;
};
