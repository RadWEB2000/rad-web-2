import { MouseEventHandler, ReactElement } from "react";
export interface IntLayoutThemeContext {
  isLight: boolean;
  isMobile: boolean;
  isOpenMenu: boolean;
  closeMenu: MouseEventHandler;
  handleMenu: MouseEventHandler;
  openMenu: MouseEventHandler;
  handle: MouseEventHandler;
}
export interface IntLayoutThemeProvider {
  children: ReactElement;
}
