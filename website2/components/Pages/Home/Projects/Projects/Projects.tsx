import Cards from "../Cards/Cards";
import SectionHomePage from "../../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./Project.module.scss";
import { ReactElement } from "react";
import { iProject } from "../../../../../src/ts/interface";
interface iProjects {
	button?: {
		path: string;
		title: string;
	};
	cards: iProject[];
	content: string;
	title: string;
}
const Projects = ({
	button,
	cards,
	content,
	title,
}: iProjects): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionHomePage button={button} content={content} title={title} />
			<Cards cards={cards} />
		</section>
	);
};
export default Projects;
