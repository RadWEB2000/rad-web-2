import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IntCardMain } from "./interface";
import { Wrapper } from "./style";
export const CardMain = ({
  button,
  cards,
  content,
  image,
  path,
  title,
}: IntCardMain) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <figure>
          <Image
            alt={title}
            layout="fill"
            loading="lazy"
            objectFit="cover"
            objectPosition="center"
            src={image}
            quality={50}
          />
        </figure>
        <section>
          <h2>
            <Link href={path}>
              <a>{title}</a>
            </Link>
          </h2>
          <p>{content}</p>
        </section>
        <div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{
              scale: 0.85,
            }}
          >
            {button}
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            exit={{ opacity: 0, visibility: "hidden" }}
          >
            {cards.map(({ path, title }) => (
              <li key={title}>
                <h3>
                  <Link href={path}>
                    <a>{title}</a>
                  </Link>
                </h3>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};
