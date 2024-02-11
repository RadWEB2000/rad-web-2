type tButtonBase = {
  label: string;
  target?: string;
  uri: string;
};

export type tButtons =
  | ({
      theme: "primary";
    } & tPrimaryButton)
  | { theme: "secondary" };

export type tPrimaryButton = tButtonBase & {
  doubleArrows?: boolean;
};
