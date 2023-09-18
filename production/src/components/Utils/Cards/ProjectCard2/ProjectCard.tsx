import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";
import Image from "next/image";
import Link from "next/link";

type tProjectCard = {
	date: string;
	excerpt: string;
	image: tImage2;
	title: string;
	variant: "home" | "projects" | "recommended";
	uri: string;
};

export default function ProjectCard(props: tProjectCard) {
	const { date, excerpt, image, variant, title, uri } = props;
	const { month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li data-variant={variant}>
			<Link href={uri}>
				<div>
					<figure>
						<Image
							alt={image.altText}
							fill
							loading="lazy"
							src={image.sourceUrl}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={50}
						/>
					</figure>
				</div>
				<section>
					<aside>
						<p>{`${month} ${year}`}</p>
					</aside>
					<article>
						<header>
							<h3 dangerouslySetInnerHTML={{ __html: title }} />
						</header>
						<p
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 170).trim() + "...",
							}}
						/>
					</article>
				</section>
			</Link>
		</li>
	);
}
