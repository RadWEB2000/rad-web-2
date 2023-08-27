import Link from "next/link";
import styles from "./Lang.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegFlag } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";

export const Lang = () => {
	const { locale, locales } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.wrapper} data-open={isOpen}>
			<button
				aria-label="lang"
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
			>
				<FaRegFlag />
			</button>
			{isOpen && (
				<AnimatePresence>
					<motion.ul className={styles.menu}>
						{locale !== undefined &&
							locales !== undefined &&
							locales.map((item: string, index: number) => {
								return (
									<li
										className={styles.item}
										data-lang={
											item.toLowerCase() === locale.toLowerCase() ? true : false
										}
										key={index}
									>
										<Link
											href=""
											locale={item}
											onClick={() => setIsOpen(false)}
										>
											{item.toUpperCase()}
										</Link>
									</li>
								);
							})}
					</motion.ul>
				</AnimatePresence>
			)}
		</div>
	);
};
