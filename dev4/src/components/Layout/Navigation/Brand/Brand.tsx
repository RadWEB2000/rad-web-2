import Link from "next/link";
import styles from "l_navigation/Brand/Brand.module.scss";
export type tBrand = {
	label: string;
	uri: string;
};

export default function Brand(props: tBrand) {
	return (
		<Link
			className={styles.wrapper}
			dangerouslySetInnerHTML={{ __html: props.label }}
			href={props.uri}
		/>
	);
}
