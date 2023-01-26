import SectionHomePage from "../../../Utilities/Sections/SectionHomePage/SectionHomePage";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "../../../Utilities/Cards/TestimonialCard/TestimonialCard";
import { IntTestimonials } from "./interface";
import { IntTestimonialCard } from "./../../../Utilities/Cards/TestimonialCard/interface";
import { ReactElement } from "react";
const Testimonials = ({ cards }: IntTestimonials): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<SectionHomePage content="" title="Opinie" />
			<ul>
				{cards.map(
					({ company, content, date, fullname, image }: IntTestimonialCard) => (
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
					)
				)}
			</ul>
		</section>
	);
};
export default Testimonials;
