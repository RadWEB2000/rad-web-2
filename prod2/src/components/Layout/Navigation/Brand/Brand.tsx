import Link from "next/link";
import styles from "./Brand.module.scss";

export interface iBrand {
	name: string;
	uri: string;
}

export const Brand = ({ name, uri }: iBrand) => {
	return (
		<div className={styles.wrapper}>
			<Link href={uri} rel="indexfollow">
				{name}
			</Link>
		</div>
	);
};
