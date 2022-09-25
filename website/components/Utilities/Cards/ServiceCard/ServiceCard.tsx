import Link from "next/link";
import { useRef, useState } from "react";
import { ButtonPrimary } from "../../Buttons/ButtonPrimary/ButtonPrimary";
import { IntServiceCard } from "./interface";
import { WrapperHome } from "./style";
import { VscArrowSmallRight } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
export const ServiceCard = ({
  button,
  cards,
  content,
  isHome,
  path,
  title,
}: IntServiceCard) => {
  const [isOpen, setIsOpen] = useState(false);
  if (isHome == true) {
    return (
      <WrapperHome>
        <div className="content">
          <section>
            <h3>
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: content.substring(0, 450) }}
            />
          </section>
          <div>
            <ButtonPrimary title={button} handle={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        {cards && isOpen && (
          <AnimatePresence>
            <motion.div
              className="more"
              initial={{ opacity: 0, visibility: "hidden" }}
              animate={{ opacity: 1, visibility: "visible" }}
              exit={{ opacity: 0, visibility: "hidden" }}
            >
              <ul>
                {cards.map(({ path, title }, index) => (
                  <li key={index}>
                    <Link href={path}>
                      <a onClick={() => setIsOpen(false)}>{title}</a>
                    </Link>
                    <span>
                      <VscArrowSmallRight />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </WrapperHome>
    );
  } else if (isHome == false) {
    return <></>;
  } else {
    return <></>;
  }
};
