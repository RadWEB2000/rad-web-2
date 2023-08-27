import { getDate } from "@default/lib/functions/getDate";
import { getStack } from "@default/lib/functions/getStack";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Page/ProjectPage/Hero/Hero.module.scss";
import { VscLinkExternal } from "react-icons/vsc";

type tHero = {
	date: string;
	excerpt: string;
	image: tImage;
	website?: {
		label: string;
		url: string;
	};
	stack?: string[];
	title: string;
};

export default function Hero({
	date,
	excerpt,
	image,
	website,
	stack,
	title,
}: tHero) {
	const { month, year } = getDate({
		date: date,
		type: "long",
	});
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<figure>
					<Image
						alt={image.alt}
						fill
						loading="eager"
						src={image.src}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={image.title}
						quality={50}
					/>
				</figure>
			</div>
			<div className={styles.details}>
				{stack && (
					<ul className={styles.stack}>
						{stack.map((item, index) => {
							const { icon, name } = getStack(item);
							if (name) {
								return (
									<li key={name} title={name ? name : ""}>
										{icon}
									</li>
								);
							}
						})}
					</ul>
				)}
				<section className={styles.content}>
					<p className={styles.release}>{`${month} ${year}`}</p>
					<header className={styles.title}>
						<h1 dangerouslySetInnerHTML={{ __html: title }} />
					</header>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
					{website && (
						<div className={styles.website}>
							<Link href={website.url} rel="noindex nofollow" target="_blank">
								<p>{website.label}</p>
								<i>
									<VscLinkExternal />
								</i>
							</Link>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}
