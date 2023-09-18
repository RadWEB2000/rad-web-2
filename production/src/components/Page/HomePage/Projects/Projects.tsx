import styles from "@default/components/Page/HomePage/Projects/Projects.module.scss";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import ProjectCard from "@default/components/Utils/Cards/ProjectCard2/ProjectCard";
import ContentBox from "@default/components/Utils/ContentBox/ContentBox";
import { iProjectCard } from "@default/ts/interfaces";

type tProjects = {
	button?: string | null;
	cards: iProjectCard[];
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
				{content && (
					<div
						style={{
							width: `clamp(10rem,120rem,95%)`,
						}}
					>
						<ContentBox content={content} theme="section" variant="dark" />
					</div>
				)}
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
				{cards.map(({ node: { date, excerpt, featuredImage, title, uri } }) => {
					return (
						<ProjectCard
							date={date}
							excerpt={excerpt}
							image={featuredImage.node}
							key={title}
							title={title}
							uri={uri}
							variant="home"
						/>
					);
				})}
			</ul>
		</div>
	);
}
