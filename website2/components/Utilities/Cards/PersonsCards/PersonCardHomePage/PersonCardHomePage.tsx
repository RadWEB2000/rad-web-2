import Image from "next/image";
import Link from "next/link";
import styles from "./PersonCardHomePage.module.scss";
import { IntPersonCardHomePage } from "./interface";
import { ReactElement } from "react";

// PersonCardHomePage
const PersonCardHomePage = ({
	cities,
	fullname,
	image,
	jobs,
	path,
}: IntPersonCardHomePage): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<Link href={path} legacyBehavior>
				<a>
					<div>
						<figure>
							<Image
								alt={`${fullname.firstname} ${fullname.lastname} - ${cities} - ${jobs}`}
								fill
								src={image}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								title={`${fullname.firstname} ${fullname.lastname} - ${cities} - ${jobs}`}
								quality={75}
							/>
						</figure>
					</div>
					<section>
						<h4>{`${fullname.firstname} ${fullname.lastname}`}</h4>
						<p
							className={styles.jobs}
							dangerouslySetInnerHTML={{ __html: jobs }}
						/>
						<p
							className={styles.cities}
							dangerouslySetInnerHTML={{ __html: cities }}
						/>
					</section>
				</a>
			</Link>
		</li>
	);
};
export default PersonCardHomePage;
