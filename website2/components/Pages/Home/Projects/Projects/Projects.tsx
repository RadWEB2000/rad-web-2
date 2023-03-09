import Cards from "../Cards/Cards";
import SectionPage from "../../../../../src/components/Utilities/Section/SectionPage/SectionPage";
import styles from "./Project.module.scss";
import { iProject, iSectionPage } from "../../../../../src/ts/interface";
import { ReactElement } from "react";
interface iProjects extends iSectionPage {
	cards: iProject[];
}
const Projects = ({
	button,
	cards,
	content,
	title,
}: iProjects): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionPage button={button} content={content} title={title} />
			<Cards cards={cards} />
		</section>
	);
};
export default Projects;
