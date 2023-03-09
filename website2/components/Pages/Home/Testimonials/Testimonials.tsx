import Masonry from "react-smart-masonry";
import SectionPage from "../../../../src/components/Utilities/Section/SectionPage/SectionPage";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "../../../../src/components/Utilities/Cards/TestimonialCard/TestimonialCard";
import { IntTestimonials } from "./interface";
import { ReactElement } from "react";
const Testimonials = ({ cards }: IntTestimonials): ReactElement => {
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
export default Testimonials;
