import Image from "next/image";
import Link from "next/link";
import { IntPersonCardAboutPage } from "./interface";
import styles from "./PersonCardAboutPage.module.scss";
const PersonCardAboutPage = ({
	cities,
	fullname,
	image,
	jobs,
	path,
}: IntPersonCardAboutPage) => {
	return (
		<li className={styles.wrapper}>
			<Link href={path}>
				<div className={styles.image}>
					<figure>
						<Image
							alt={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
							quality={85}
						/>
					</figure>
				</div>
				<section className={styles.content}>
					<h3>{`${fullname.lastname} ${fullname.firstname}`}</h3>
					<p className={styles.jobs}>{jobs}</p>
					<p className={styles.cities}>{cities}</p>
				</section>
			</Link>
		</li>
	);
};
export default PersonCardAboutPage;
