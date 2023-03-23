import Masonry from "react-smart-masonry";
import SectionPage from "../../../Utilities/Section/SectionPage/SectionPage";
import styles from "./TestimonialsSection.module.scss";
import TestimonialCard from "../../../Utilities/Cards/TestimonialCard/TestimonialCard";
import { ReactElement } from "react";
import { tFullname } from "../../../../ts/types";

interface iTestimonialsSection {
	cards: {
		company: string;
		content: string;
		date: string;
		fullname: tFullname;
		image: string;
	}[];
}

const TestimonialsSection = ({ cards }: iTestimonialsSection): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionPage content="" title="Opinie" />
			<Masonry
				autoArrange={true}
				breakpoints={{ mobile: 0, tablet: 550, desktop: 1250 }}
				columns={{ mobile: 1, tablet: 2, desktop: 3 }}
				gap={{ mobile: 2.5, tablet: 5, desktop: 10 }}
			>
				{cards.map(({ company, content, date, fullname, image }) => (
					<TestimonialCard
						company={company}
						content={content}
						date={date}
						fullname={{
							firstname: fullname.firstname,
							lastname: fullname.lastname,
						}}
						image={image}
						key={image}
					/>
				))}
			</Masonry>
		</section>
	);
};
export default TestimonialsSection;
