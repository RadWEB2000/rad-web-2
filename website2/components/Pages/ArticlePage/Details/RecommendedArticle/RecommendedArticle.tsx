import Image from "next/image";
import Link from "next/link";
import { IntRecommendedArticle } from "./interface";
import { ReactElement } from "react";
const RecommendedArticle = ({
	heading,
	image,
	path,
	title,
}: IntRecommendedArticle): ReactElement => {
	return (
		<div title={title}>
			<h2>{heading}</h2>
			<Link href={path} rel="index follow">
				<div>
					<figure>
						<Image
							alt={title}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={title}
							quality={90}
						/>
					</figure>
				</div>
				<section>
					<h3>{title}</h3>
				</section>
			</Link>
		</div>
	);
};
export default RecommendedArticle;
