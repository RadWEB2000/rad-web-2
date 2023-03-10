import Link from "next/link";
import styles from "./Socials.module.scss";
import { IntSocials } from "./interface";
import { motion } from "framer-motion";
import getSocials from "../../../../../lib/functions/getSocials";
const Socials = ({ socials }: IntSocials) => {
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
