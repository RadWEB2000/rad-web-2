"use client";
import { createContext } from "react";
import { motion, useScroll } from "framer-motion";

type tScrollContext = {
  position: number | any;
};

type tScrollProvider = {
  children: React.ReactNode;
};

export const ScrollContext = createContext<tScrollContext>({
  position: 0,
});

export default function ScrollProvider(props: tScrollProvider) {
  const { scrollYProgress } = useScroll();
  return (
    <ScrollContext.Provider
      value={{
        position: scrollYProgress,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
}
