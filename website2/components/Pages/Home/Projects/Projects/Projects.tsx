import Cards from "../Cards/Cards";
import SectionHomePage from "../../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import { IntProjects } from "./interface";
import { ReactElement } from "react";
const Projects = ({
	button,
	cards,
	content,
	title,
}: IntProjects): ReactElement => {
	return (
		<section>
			<SectionHomePage button={button} content={content} title={title} />
			<Cards cards={cards} />
		</section>
	);
};
export default Projects;
