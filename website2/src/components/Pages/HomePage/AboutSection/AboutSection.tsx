import CardsWrapper from "../../../Utilities/Cards/CardsWrapper/CardsWrapper";
import PersonCard from "../../../Utilities/Cards/PersonCard/PersonCard";
import SectionPage from "../../../Utilities/Section/SectionPage/SectionPage";
import styles from "./AboutSection.module.scss";
import { iSectionPage } from "../../../../ts/interface";
import { tFullname } from "../../../../ts/types";

interface iAboutSection extends iSectionPage {
	cards: {
		cities: string;
		fullname: tFullname;
		image: string;
		jobs: string;
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
			<CardsWrapper variant="articles">
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
			</CardsWrapper>
		</div>
	);
};
export default AboutSection;
