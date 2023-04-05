import CardsWrapper from "../../../Utilities/Cards/CardsWrapper/CardsWrapper";
import PersonCard, {
	PersonCardHomePage,
} from "../../../Utilities/Cards/PersonCard/PersonCard";
import SectionPage from "../../../Utilities/Section/SectionPage/SectionPage";
import styles from "./AboutSection.module.scss";
import { iSectionPage } from "../../../../ts/interface";
import { tFullname } from "../../../../ts/types";

interface iAboutSection extends iSectionPage {
	cards: {
		cities: string;
		firstname: string;
		image: string;
		jobs: string;
		lastname: string;
		path: string;
	}[];
}

const AboutSection = ({ button, cards, content, title }: iAboutSection) => {
	return (
		<div className={styles.wrapper}>
			{button ? (
				<SectionPage
					content={content}
					title={title}
					button={{
						path: button.path,
						title: button.title,
					}}
				/>
			) : (
				<SectionPage content={content} title={title} />
			)}
			<CardsWrapper variant="persons-section">
				{cards.map(({ cities, firstname, image, jobs, lastname, path }) => (
					<PersonCardHomePage
						button="więcej"
						cities={cities}
						excerpt=""
						fullname={{
							firstname: firstname,
							lastname: lastname,
						}}
						image={image}
						jobs={jobs}
						key={image}
						path={path}
					/>
				))}
			</CardsWrapper>
		</div>
	);
};
export default AboutSection;
