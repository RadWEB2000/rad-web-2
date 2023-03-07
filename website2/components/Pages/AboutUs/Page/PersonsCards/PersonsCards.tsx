import styles from "./PersonsCards.module.scss";
import { IntPersonsCards } from "./interface";
import { ReactElement } from "react";
import SectionAboutPage from "../../../../Utilities/Sections/SectionAboutPage/SectionAboutPage";
import PersonCard from "../../../../../src/components/Utilities/Cards/PersonCard/PersonCard";
const PersonsCards = ({
	content,
	cards,
	title,
}: IntPersonsCards): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`}>
			<SectionAboutPage content={content} title={title} />
			<ul>
				{cards.map(({ cities, fullname, image, jobs, path }) => (
					<PersonCard
						cities={cities}
						email="radoslaw.adamczyk@gmail.com"
						fullname={{
							firstname: fullname.firstname,
							lastname: fullname.lastname,
						}}
						image={image}
						jobs={jobs}
						key={`${fullname.firstname} ${fullname.lastname} - o nas`}
						path={path}
						phone=""
						variant="about"
					/>
				))}
			</ul>
		</div>
	);
};
export default PersonsCards;
