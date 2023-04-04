import PersonCard from "../../../../../src/components/Utilities/Cards/PersonCard/PersonCard";
import SectionPage from "../../../../../src/components/Utilities/Section/SectionPage/SectionPage";
import styles from "./PersonsCards.module.scss";
import { iSectionPage } from "../../../../../src/ts/interface";
import { tFullname } from "../../../../../src/ts/types";
import { ReactElement } from "react";
interface iPersonCards extends iSectionPage {
	cards: {
		cities: string;
		firstname: string;
		image: string;
		jobs: string;
		lastname: string;
		path: string;
	}[];
}
const PersonsCards = ({
	content,
	cards,
	title,
}: iPersonCards): ReactElement => {
	return (
		<div className={`section ${styles.wrapper}`} id="zespol">
			<SectionPage content={content} title={title} />
			<ul>
				{cards.map(({ cities, firstname, image, jobs, lastname, path }) => (
					<PersonCard
						cities={cities}
						email="radoslaw.adamczyk@gmail.com"
						fullname={{
							firstname: firstname,
							lastname: lastname,
						}}
						image={image}
						jobs={jobs}
						key={`${firstname} ${lastname} - o nas`}
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
