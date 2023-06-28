import getSocials from "../../../../../lib/functions/getSocials";
import Link from "next/link";
import styles from "./Socials.module.scss";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface iSocials {
	socials: string[];
}

const Socials = ({ socials }: iSocials): ReactElement => {
	return (
		<ul className={styles.wrapper}>
			{socials.map((path) => (
				<li key={path} title={`${getSocials({ path: path }).name}`}>
					<Link
						href={path}
						legacyBehavior
						rel="index follow"
						target="_blank"
						title={`${getSocials({ path: path }).name}`}
					>
						<motion.a
							whileHover={{
								scale: 1.1,
							}}
							whileTap={{
								scale: 0.94,
							}}
						>
							{getSocials({ path }).icon}
						</motion.a>
					</Link>
				</li>
			))}
		</ul>
	);
};
export default Socials;
