import Image from "next/image";
import getDate from "../../../../lib/getDate";
import styles from "./HeroArticle.module.scss";
import { BsClock } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";
import { IntHeroArticle } from "./interface";
import { ReactElement } from "react";
const HeroArticle = ({
	date,
	excerpt,
	image,
	lang,
	time,
	title,
	url,
}: IntHeroArticle): ReactElement => {
	const { day, month, year } = getDate({
		date: date,
		lang: lang,
		variant: "fullname",
	});
	return (
		<header className={styles.wrapper}>
			<section className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.release}>{`${day} ${month} ${year}`}</p>
				<p className={styles.reading}>
					<span>
						<BsClock />
					</span>
					{` ${time}`} min
				</p>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{ __html: excerpt }}
				/>
			</section>
			<ul className={styles.socials}>
				<li className={styles.social__item}>
					<FacebookShareButton url={url}>
						<FaFacebookF />
					</FacebookShareButton>
				</li>
				<li className={styles.social__item}>
					<LinkedinShareButton url={url}>
						<FaLinkedinIn />
					</LinkedinShareButton>
				</li>
				<li className={styles.social__item}>
					<TwitterShareButton url={url}>
						<FaTwitter />
					</TwitterShareButton>
				</li>
			</ul>
			<figure className={styles.image}>
				<Image
					alt={`${day} ${month} ${year} - ${title}`}
					fill
					src={image}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={`${day} ${month} ${year} - ${title}`}
					quality={89}
				/>
			</figure>
		</header>
	);
};
export default HeroArticle;
