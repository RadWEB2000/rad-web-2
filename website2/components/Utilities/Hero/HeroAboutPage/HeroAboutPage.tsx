import getSocials from "./../../../../lib/getSocials";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroAboutPage.module.scss";
import { IntHeroAboutPage } from "./interface";
const HeroAboutPage = ({
	cities,
	fullname,
	image,
	jobs,
	socials,
}: IntHeroAboutPage) => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.image}>
				<figure className={styles.picture}>
					<Image
						alt={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${fullname.firstname} ${fullname.lastname} - ${jobs} - ${cities}`}
						quality={90}
					/>
				</figure>
			</div>
			<section className={styles.content}>
				<h1
					className={styles.title}
				>{`${fullname.firstname} ${fullname.lastname}`}</h1>
				<p className={styles.jobs} dangerouslySetInnerHTML={{ __html: jobs }} />
				<p
					className={styles.cities}
					dangerouslySetInnerHTML={{ __html: cities }}
				/>
				<ul className={styles.socials}>
					{socials.map((item, index) => (
						<li
							className={styles.social}
							key={item}
							title={`${getSocials({ path: item }).name}`}
						>
							<Link href={item} rel="index follow" target="_blank">
								{getSocials({ path: item }).icon}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</header>
	);
};
export default HeroAboutPage;
