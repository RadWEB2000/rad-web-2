import HomeProjectCard from "@default/components/Utils/Cards/ProjectCard/HomeProjectCard/HomeProjectCard";
import styles from "@default/components/Page/HomePage/Projects/Projects.module.scss";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";

type tProjects = {
	button?: string | null;
	cards: {
		node: {
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
			};
			title: string;
			uri: string;
		};
	}[];
	content?: string;
	title: string;
	uri?: string | null;
};

export default function Projects({
	button,
	cards,
	content,
	title,
	uri,
}: tProjects) {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				{content && <p dangerouslySetInnerHTML={{ __html: content }} />}
				{button && uri && button !== null && uri !== null && (
					<div>
						<ButtonPrimary
							theme="secondary"
							label={button}
							uri={uri}
							variant="link"
						/>
					</div>
				)}
			</section>
			<ul>
				{cards.map(({ node: { excerpt, featuredImage, title, uri } }) => {
					return (
						<HomeProjectCard
							button="więcej"
							excerpt={excerpt}
							image={{
								alt: featuredImage.node.altText,
								src: featuredImage.node.sourceUrl,
								title: featuredImage.node.title,
							}}
							key={title}
							title={title}
							uri={uri}
						/>
					);
				})}
			</ul>
		</div>
	);
}
