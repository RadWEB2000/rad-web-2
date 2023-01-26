import getDate from "./../../../../lib/getDate";
import Image from "next/image";
import styles from "./TestimonialCard.module.scss";
import { IntTestimonialCard } from "./interface";
import { ReactElement } from "react";
const TestimonialCard = ({
	company,
	content,
	date,
	fullname,
	image,
}: IntTestimonialCard): ReactElement => {
	const { day, month, year } = getDate({
		date: date,
		lang: "pl",
		variant: "shortname",
	});
	return (
		<li className={styles.wrapper}>
			<div className={styles.info}>
				<figure>
					<Image
						alt=""
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title=""
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
		</li>
	);
};
export default TestimonialCard;
