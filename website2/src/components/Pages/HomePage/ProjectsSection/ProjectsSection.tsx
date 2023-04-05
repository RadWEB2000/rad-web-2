import { ProjectCard2 } from "../../../Utilities/Cards/ProjectCard/ProjectCard";
import SectionPage from "../../../../../src/components/Utilities/Section/SectionPage/SectionPage";
import styles from "./ProjectsSection.module.scss";
import { iSectionPage } from "../../../../../src/ts/interface";
import { ReactElement } from "react";
import { tProjectCategory } from "../../../../ts/types";
interface iProjects extends iSectionPage {
	cards: {
		category: tProjectCategory;
		excerpt: string;
		image: string;
		path: string;
		release: string | Date;
		title: string;
	}[];
}
const ProjectsSection = ({
	button,
	cards,
	content,
	title,
}: iProjects): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionPage button={button} content={content} title={title} />
			<div>
				{cards
					?.sort(
						(a, b) =>
							new Date(b.release).getTime() - new Date(a.release).getTime()
					)
					.slice(0, 1)
					.map(({ category, excerpt, image, path, release, title }) => (
						<ProjectCard2
							// category={category}
							content={excerpt}
							image={image}
							key={title}
							path={path}
							button="więcej"
							stack={["html", "react", "php"]}
							// release={release}
							title={title}
							// variant="page"
						/>
					))}
			</div>
		</section>
	);
};
export default ProjectsSection;
