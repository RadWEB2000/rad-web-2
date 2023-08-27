import Link from "next/link";
import styles from "@default/components/Layout/Navigation/Brand/Brand.module.scss";

export interface iBrand {
	brand: string;
}

export default function Brand({ brand }: iBrand) {
	return (
		<div className={styles.wrapper}>
			<Link href="/">{brand}</Link>
		</div>
	);
}
