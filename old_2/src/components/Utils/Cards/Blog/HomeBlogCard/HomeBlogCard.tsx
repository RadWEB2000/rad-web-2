import Image from "next/image";
import Link from "next/link";
import styles from "./HomeBlogCard.module.scss";
import { getDate } from "@default/src/lib/functions/getDate";
import { HiArrowRight } from "react-icons/hi";

interface iHomeBlogCard {
	category: {
		label: string;
		uri: string;
	};
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	release: string;
	title: string;
	uri: string;
}

export const HomeBlogCard = ({
	category,
	image,
	release,
	title,
	uri,
}: iHomeBlogCard) => {
	const { day, month, year } = getDate({
		date: release,
		lang: "pl",
		type: "short",
	});
	return (
		<li className={styles.wrapper}>
			<div className={styles.image}>
				<figure>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title ? image.title : ""}
						quality={60}
					/>
				</figure>
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<div>
					<Link href={category.uri}>{category.label}</Link>
					<p>{`${day} ${month} ${year}`}</p>
				</div>
				<Link href={uri} rel="index follow">
					<i>
						<HiArrowRight />
					</i>
				</Link>
			</div>
		</li>
	);
};
