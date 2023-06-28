import styles from "./Projects.module.scss";
import { HomeProjectCard } from "@default/src/components/Utils/Cards/Projects/HomeProjectCard/HomeProjectCard";
import { projects } from "@default/src/data/projects";
import Link from "next/link";

interface iProjects {
	cards: {
		release: string;
		excerpt: string;
		image: string;
		title: string;
		category: {
			name: string;
			uri: string;
		}[];
		slug: string;
	}[];
	title: string;
	content: string;
	button?: {
		label: string;
		uri: string;
	};
}

export const Projects = ({ button, cards, content, title }: iProjects) => {
	return (
		<div className={styles.wrapper}>
			<article>
				<header>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
				<div>
					{button && (
						<Link href={button.uri} rel="index follow">
							{button.label}
						</Link>
					)}
				</div>
			</article>
			<div>
				<ul>
					{cards.slice(0, 4).map(({ category, image, title, slug }) => {
						return (
							<HomeProjectCard
								categories={category}
								image={{
									alt: title,
									src: image,
									title: title,
								}}
								key={title}
								title={title}
								uri={slug}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
