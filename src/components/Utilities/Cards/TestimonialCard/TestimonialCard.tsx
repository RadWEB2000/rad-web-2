import Image from "next/image";
import styles from "./TestimonialCard.module.scss";
import { tFullname } from "../../../../ts/types";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { getDate } from "../../../../lib/functions/getDate";

interface iTestimonialCard {
	company: string;
	content: string;
	date: string;
	fullname: tFullname;
	image: string;
}

const TestimonialCard = ({
	company,
	content,
	date,
	fullname,
	image,
}: iTestimonialCard): ReactElement => {
	const { day, month, year } = getDate({
		date: date,
		lang: "pl",
		variant: "short",
	});
	return (
		<motion.li
			className={styles.wrapper}
			initial={{
				opacity: 0,
				visibility: "hidden",
				y: -20,
			}}
			whileInView={{
				opacity: 1,
				visibility: "visible",
				y: 0,
				transition: {
					delay: 0.4,
				},
			}}
			viewport={{ once: true }}
		>
			<div className={styles.info}>
				<figure>
					<Image
						alt={`${fullname.firstname} ${fullname.lastname} - ${company} - ${day} ${month} ${year}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${fullname.firstname} ${fullname.lastname} - ${company} - ${day} ${month} ${year}`}
						quality={90}
					/>
				</figure>
				<div>
					<h4>{`${fullname.firstname} ${fullname.lastname}`}</h4>
					<h5>{company}</h5>
				</div>
			</div>
			<section className={styles.content}>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
			<div className={styles.date}>
				<p>{`${day} ${month} ${year}`}</p>
			</div>
		</motion.li>
	);
};
export default TestimonialCard;
