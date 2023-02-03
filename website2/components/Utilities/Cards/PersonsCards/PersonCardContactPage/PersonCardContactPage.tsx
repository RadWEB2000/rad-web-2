import Image from "next/image";
import Link from "next/link";
import styles from "./PersonCardContactPage.module.scss";
import { CiMail, CiPhone } from "react-icons/ci";
import { IntPersonCardContactPage } from "./interface";
import { ReactElement } from "react";
const PersonCardContactPage = ({
	email,
	fullname,
	image,
	job,
	path,
	phone,
}: IntPersonCardContactPage): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<figure className={styles.image}>
				<Image
					alt={`${fullname.firstname} ${fullname.lastname} - ${job}`}
					fill
					src={image}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={`${fullname.firstname} ${fullname.lastname} - ${job}`}
					quality={90}
				/>
			</figure>
			<figcaption className={styles.content}>
				<section className={styles.description}>
					<h2 className={styles.fullname}>
						<Link
							href={path}
						>{`${fullname.firstname} ${fullname.lastname}`}</Link>
					</h2>
					<h3 className={styles.jobs}>{job}</h3>
				</section>
				<div className={styles.contact}>
					<Link className={styles.contactItem} href={`mailto:${email.address}`}>
						<i>
							<span>
								<CiMail />
							</span>
						</i>
						{email.name}
					</Link>
					<Link className={styles.contactItem} href={`tel:${phone.address}`}>
						<i>
							<span>
								<CiPhone />
							</span>
						</i>
						{phone.name}
					</Link>
				</div>
			</figcaption>
		</li>
	);
};
export default PersonCardContactPage;
