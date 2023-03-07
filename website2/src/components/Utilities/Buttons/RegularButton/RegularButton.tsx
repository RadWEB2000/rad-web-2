import Link from "next/link";
import styles from "./RegularButton.module.scss";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
interface iRegularButton {
	handle?: Dispatch<SetStateAction<string | boolean>> | any;
	path?: string;
	title: string | ReactElement;
	variant: "primary" | "secondary";
}

const RegularButton = ({ handle, path, title, variant }: iRegularButton) => {
	const { locale } = useRouter();
	if (path) {
		return (
			<motion.button
				className={styles.wrapper}
				data-variant={variant}
				whileTap={{
					scale: 0.95,
				}}
			>
				<Link href={path} hrefLang={locale} legacyBehavior>
					<a className={styles.content}>{title}</a>
				</Link>
			</motion.button>
		);
	} else if (handle) {
		return (
			<motion.button
				className={styles.wrapper}
				data-variant={variant}
				onClick={handle}
				whileTap={{
					scale: 0.95,
				}}
			>
				<p className={styles.content}>{title}</p>
			</motion.button>
		);
	} else return null;
};

export default RegularButton;
