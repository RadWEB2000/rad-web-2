import PersonCardHomePage from "../../../Utilities/Cards/PersonsCards/PersonCardHomePage/PersonCardHomePage";
import SectionHomePage from "./../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import { IntAbout } from "./interface";

const About = ({ button, cards, content, title }: IntAbout) => {
	return (
		<div>
			<SectionHomePage
				content={content}
				title={title}
				button={{
					path: button.path,
					title: button.title,
				}}
			/>
			<ul>
				{cards.map(({ cities, fullname, image, jobs, path }) => (
					<PersonCardHomePage
						cities={cities}
						fullname={{
							firstname: fullname.firstname,
							lastname: fullname.lastname,
						}}
						image={image}
						jobs={jobs}
						key={path}
						path={path}
					/>
				))}
			</ul>
		</div>
	);
};
export default About;
