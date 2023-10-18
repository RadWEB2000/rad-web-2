import Image from "next/image";
import Link from "next/link";
import styles from "@layout/Navigation/Brand/Brand.module.scss";
import { tBrand } from "@ts/types";

export default function Brand(props: tBrand) {
	const { image, uri } = props;
	return (
		<Link className={styles.wrapper} href={uri} hrefLang="pl">
			<Image
				alt={image.altText}
				fill
				loading="eager"
				priority
				style={{
					objectFit: "contain",
					objectPosition: "center",
				}}
				src={image.sourceUrl}
				title={image.title}
				quality={70}
			/>
		</Link>
	);
}
