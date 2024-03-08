import { tButton } from "ts/types";
import { uRel } from "ts/unions";

export type tPrimaryButton = tButton & {
  rel: uRel;
  icon: "expand" | "right" | "none";
};
