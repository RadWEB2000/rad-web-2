import PersonCard from "../../../../src/components/Utilities/Cards/PersonCard/PersonCard";
import SectionHomePage from "./../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./About.module.scss";
import { IntAbout } from "./interface";

const About = ({ button, cards, content, title }: IntAbout) => {
	return (
		<div className={styles.wrapper}>
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
					<PersonCard
						cities={cities}
						email=""
						fullname={{
							firstname: fullname.firstname,
							lastname: fullname.lastname,
						}}
						image={image}
						jobs={jobs}
						key={~`${fullname.firstname} ${fullname.lastname} - home`}
						path={path}
						phone=""
						variant="home"
					/>
				))}
			</ul>
		</div>
	);
};
export default About;
