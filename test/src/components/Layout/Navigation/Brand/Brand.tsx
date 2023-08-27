import { tLink } from "@default/ts/types";
import Link from "next/link";
import styles from "@default/components/Layout/Navigation/Brand/Brand.module.scss";

export type tBrand = tLink;

export default function Brand({ label, uri }: tBrand) {
	return (
		<div className={styles.wrapper}>
			<Link href={uri}>{label}</Link>
		</div>
	);
}
