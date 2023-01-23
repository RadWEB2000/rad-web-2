import Cards from "../Cards/Cards";
import SectionHomePage from "../../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./Project.module.scss";
import { IntProjects } from "./interface";
import { ReactElement } from "react";
const Projects = ({
	button,
	cards,
	content,
	title,
}: IntProjects): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionHomePage button={button} content={content} title={title} />
			<Cards cards={cards} />
		</section>
	);
};
export default Projects;
