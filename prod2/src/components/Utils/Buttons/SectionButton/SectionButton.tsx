import Link from "next/link";
import styles from "./SectionButton.module.scss";

export interface iSectionButton {
	label: string;
	uri: string;
}

export const SectionButton = ({ label, uri }: iSectionButton) => {
	return (
		<div className={styles.wrapper}>
			<Link href={uri} rel="index follow">
				{label}
			</Link>
		</div>
	);
};
