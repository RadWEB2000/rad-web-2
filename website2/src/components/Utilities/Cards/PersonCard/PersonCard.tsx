import Image from "next/image";
import Link from "next/link";
import styles from "./PersonCard.module.scss";
import { tFullname } from "../../../../ts/types";
import { ReactElement } from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface iPersonCard {
	cities: string;
	email: string;
	fullname: tFullname;
	image: string;
	jobs: string;
	path: string;
	phone: string;
	variant: "about" | "contact" | "home";
}

const PersonCard = ({
	cities,
	email,
	fullname,
	image,
	jobs,
	path,
	phone,
	variant,
}: iPersonCard): ReactElement | null => {
	if (variant === "about") {
		return (
			<li className={styles.wrapper__about}>
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
	} else if (variant === "contact") {
		return (
			<li className={styles.wrapper__contact}>
				<figure className={styles.image}>
					<Image
						alt={`${fullname.firstname} ${fullname.lastname} - ${jobs}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${fullname.firstname} ${fullname.lastname} - ${jobs}`}
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
						<h3 className={styles.jobs}>{jobs}</h3>
					</section>
					<div className={styles.contact}>
						<Link className={styles.contactItem} href={`mailto:${email}`}>
							<i>
								<span>
									<CiMail />
								</span>
							</i>
						</Link>
						<Link className={styles.contactItem} href={`tel:${phone}`}>
							<i>
								<span>
									<CiPhone />
								</span>
							</i>
						</Link>
					</div>
				</figcaption>
			</li>
		);
	} else if (variant === "home") {
		return (
			<li className={styles.wrapper__home}>
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
	} else return null;
};

export default PersonCard;

interface iPersonCardHomePage {
	button: string;
	cities: string;
	excerpt: string;
	fullname: tFullname;
	image: string;
	jobs: string;
	path: string;
}

export const PersonCardHomePage = ({
	button,
	cities,
	excerpt,
	fullname,
	image,
	jobs,
	path,
}: iPersonCardHomePage) => {
	return (
		<li className={styles.wrapper2}>
			<figure>
				<Image
					alt=""
					fill
					src={image}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</figure>
			<section>
				<h3
					className={styles.fullname}
				>{`${fullname.firstname}  ${fullname.lastname}`}</h3>
				<p className={styles.jobs}>{jobs}</p>
				<p className={styles.cities}>{cities}</p>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 150) + ``,
					}}
				/>
				{/* <p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: excerpt.substring(0, 150) + `[...]`,
					}}
				/> */}
				<div className={styles.button}>
					<Link href={path}>
						<span>{button}</span>
						<i>
							<HiOutlineArrowNarrowRight />
						</i>
					</Link>
				</div>
			</section>
		</li>
	);
};
