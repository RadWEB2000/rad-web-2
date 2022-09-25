import Link from "next/link";
import { ReactElement } from "react";
import { CgChevronDown } from "react-icons/cg";
import { IntItem } from "./interface";
import { Expand, Regular, Submenu } from "./style";
import { motion } from "framer-motion";
export const Item = ({
  handleButton,
  handleMenu,
  path,
  title,
  variant,
}: IntItem): ReactElement | null => {
  if (variant == "regular") {
    return (
      <Regular>
        <Link href={path}>
          <a onClick={handleMenu}>{title}</a>
        </Link>
      </Regular>
    );
  } else if (variant == "expand") {
    return (
      <Expand>
        <Link href={path}>
          <a onClick={handleMenu}>{title}</a>
        </Link>
        <motion.button
          onClick={handleButton}
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <CgChevronDown />
        </motion.button>
      </Expand>
    );
  } else if (variant == "submenu") {
    return (
      <Submenu>
        <Link href={path}>
          <a onClick={handleMenu}>{title}</a>
        </Link>
      </Submenu>
    );
  } else {
    return null;
  }
};
