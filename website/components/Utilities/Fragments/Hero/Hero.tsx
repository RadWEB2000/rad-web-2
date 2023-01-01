import Image from "next/image";
import { IntHero } from "./interface";
import { ReactElement } from "react";
import { Page } from "./style";
import { motion } from "framer-motion";
type TypeHero = ReactElement | null;
export const Hero = ({ content, title, type }: IntHero): TypeHero => {
	if (type === "page") {
		return (
			<Page>
				<section>
					<motion.h1
						initial={{
							opacity: 0,
							transform: "translateX(-20px)",
							visibility: "hidden",
						}}
						animate={{
							opacity: 1,
							transform: "translateX(0px)",
							visibility: "visible",
						}}
					>
						{title}
					</motion.h1>
					<motion.p dangerouslySetInnerHTML={{ __html: content }} />
				</section>
			</Page>
		);
	} else {
		return null;
	}
};
