import PersonCardAboutPage from "../../../../Utilities/Cards/PersonsCards/PersonCardAboutPage/PersonCardAboutPage";
import styles from "./PersonsCards.module.scss";
import { IntPersonsCards } from "./interface";
import { ReactElement } from "react";
import SectionAboutPage from "../../../../Utilities/Sections/SectionAboutPage/SectionAboutPage";
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
					<PersonCardAboutPage
						cities={cities}
						fullname={{
							firstname: fullname.firstname,
							lastname: fullname.lastname,
						}}
						image={image}
						key={`${fullname.firstname} ${fullname.lastname}`}
						jobs={jobs}
						path={path}
					/>
				))}
			</ul>
		</div>
	);
};
export default PersonsCards;
