import { uRel } from "ts/unions";

export type tPrimaryButton = {
  href: string;
  label: string;
  target: string;
  theme: "light" | "dark";
  rel: uRel;
};
