import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Footer } from "../../components/Layout/Footer/Footer/Footer";
import { Navigation } from "../../components/Layout/Navigation/Navigation/Navigation";
import { Global } from "../../styles/Global";
import { lightTheme } from "../../styles/theme";
import { IntLayoutThemeContext, IntLayoutThemeProvider } from "./interface";
export const LayoutThemeContext = createContext<IntLayoutThemeContext>({
  isLight: false,
  isMobile: false,
  isOpenMenu: false,
  closeMenu: () => {},
  handleMenu: () => {},
  openMenu: () => {},
  handle: () => {},
});
export const LayoutThemeProvider = ({ children }: IntLayoutThemeProvider) => {
  const [isLight, setIsLight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 900) {
          setIsMobile(true);
          setIsOpenMenu(false);
        } else {
          setIsMobile(false);
          setIsOpenMenu(true);
        }
      });
      if (window.innerWidth <= 900) {
        setIsMobile(true);
        setIsOpenMenu(false);
      } else {
        setIsMobile(false);
        setIsOpenMenu(true);
      }
    }
  }, []);
  return (
    <LayoutThemeContext.Provider
      value={{
        isLight: isLight,
        isMobile: isMobile,
        isOpenMenu: isOpenMenu,
        closeMenu: () => setIsOpenMenu(false),
        handleMenu: () => setIsOpenMenu(!isOpenMenu),
        openMenu: () => setIsOpenMenu(true),
        handle: () => setIsLight(!isLight),
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <Global />
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </LayoutThemeContext.Provider>
  );
};
