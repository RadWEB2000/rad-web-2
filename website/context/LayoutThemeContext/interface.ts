import { MouseEventHandler, ReactElement } from "react";
import { IntSeo } from "../../components/Layout/Seo/interface";
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
