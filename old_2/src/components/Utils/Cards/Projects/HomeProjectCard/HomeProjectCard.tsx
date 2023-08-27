import Image from "next/image";
import Link from "next/link";
import styles from "./HomeProjectCard.module.scss";
import { HiArrowRight } from "react-icons/hi";
interface iHomeProjectCard {
	categories: {
		name: string;
		uri: string;
	}[];
	image: {
		alt: string;
		src: string;
		title?: string;
	};
	title: string;
	uri: string;
}
export const HomeProjectCard = ({
	categories,
	image,
	title,
	uri,
}: iHomeProjectCard) => {
	return (
		<li className={styles.wrapper}>
			<div>
				<figure>
					<Image
						alt={image.alt}
						fill
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title}
						quality={55}
					/>
				</figure>
				<ul>
					{categories.map(({ name, uri }) => {
						return (
							<li key={name}>
								<Link href={uri} rel="index follow">
									{name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<section>
				<h3>{title}</h3>
				<div>
					<Link href={uri} rel="index follow">
						<i>
							<HiArrowRight />
						</i>
					</Link>
				</div>
			</section>
		</li>
	);
};
