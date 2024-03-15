import { tCustomButton, tRel } from "ts/commons";

export type tPrimaryButton = tCustomButton & {
  mode: "red" | "white" | "black";
  rel: tRel;
};
