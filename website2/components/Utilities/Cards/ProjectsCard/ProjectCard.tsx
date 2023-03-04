import Image from "next/image";
import { typeLang, typeProjectCategory } from "../../../../types/types";
import {
	Dispatch,
	ReactElement,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import getDate from "../../../../lib/getDate";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

interface IntProjectCard {
	excerpt: string;
	image: string;
	lang: typeLang;
	path: string;
	release: string;
	size?: "big" | "small";
	title: string;
}

const ProjectCard = ({
	excerpt,
	image,
	lang = "pl",
	path,
	release,
	size = "small",
	title,
}: IntProjectCard) => {
	const { month, year } = getDate({
		date: release,
		lang: lang,
		variant: "shortname",
	});
	const [currentCategory, setCurrentCategory] = useState<
		typeProjectCategory | ""
	>("");

	useEffect(() => {
		console.log(currentCategory);
	}, [currentCategory]);

	if (size === "big") {
		return (
			<li className={styles.wrapper__big}>
				<section className={styles.content}>
					<p className={styles.release}>{`${month} ${year}`}</p>
					<h2 className={styles.title}>
						<Link href={path} rel="index follow">
							{title}
						</Link>
					</h2>
					<p
						className={styles.excerpt}
						dangerouslySetInnerHTML={{
							__html: excerpt.substring(0, 170) + "...",
						}}
					/>
				</section>
				<div className={styles.image}>
					<figure>
						<Image
							alt={`${title} - ${month} ${year} | RadWEB`}
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							src={image}
							title={`${title} - ${month} ${year} | RadWEB`}
						/>
					</figure>
				</div>
			</li>
		);
	} else {
		return (
			<Link href={path} rel="index follow">
				{" "}
				<li className={styles.wrapper__small}>
					<div className={styles.image}>
						<figure>
							<Image
								alt={`${title} - ${month} ${year} | RadWEB`}
								fill
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								src={image}
								title={`${title} - ${month} ${year} | RadWEB`}
							/>
						</figure>
					</div>
					<section className={styles.content}>
						<p className={styles.release}>{`${month} ${year}`}</p>
						<h3 className={styles.title}>{title}</h3>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 100) + "...",
							}}
						/>
					</section>
				</li>
			</Link>
		);
	}
};
export default ProjectCard;
