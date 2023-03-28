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
			<CardsWrapper variant="persons-section">
				{/* {cards.map(({ cities, fullname, image, jobs, path }) => (
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
				))} */}
				{cards.map(({ cities, fullname, image, jobs, path }) => (
					<PersonCardHomePage
						button="więcej"
						cities={cities}
						excerpt="Reiciendis et dolores reiciendis ea omnis et. Est quis est quo expedita veritatis rem porro nihil fugit. Possimus cupiditate commodi aliquid illo cupiditate qui mollitia sit unde. Ad debitis dolores aut fugit blanditiis. Placeat provident aut quia architecto. Est neque itaque est accusantium vel amet qui illo eaque."
						fullname={fullname}
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
