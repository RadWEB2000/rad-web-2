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
import { IntHeroArticle, IntSocialsShare } from "./interface";
import { ReactElement } from "react";
const SocialsShare = ({ url }: IntSocialsShare) => {
	const shareUrl =
		window !== undefined ? window.location.href : "https://rad-web.vercel.app";
	return (
		<ul className={styles.socials}>
			<li className={styles.social}>
				<FacebookShareButton url={shareUrl}>
					<FaFacebookF />
				</FacebookShareButton>
			</li>
			<li className={styles.social}>
				<LinkedinShareButton url={shareUrl}>
					<FaLinkedinIn />
				</LinkedinShareButton>
			</li>
			<li className={styles.social}>
				<TwitterShareButton url={shareUrl}>
					<FaTwitter />
				</TwitterShareButton>
			</li>
		</ul>
	);
};
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
			<section className={styles.details}>
				<h1 className={styles.title}>{title}</h1>
				<SocialsShare url={url} />
				<p className={styles.release}>{`${day} ${month} ${year}`}</p>
				<p className={styles.reading}>
					<span>
						<BsClock />
					</span>
					{` ${time}`} min
				</p>
			</section>

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
			<section className={styles.excerpt}>
				<p dangerouslySetInnerHTML={{ __html: excerpt }} />
			</section>
		</header>
	);
};
export default HeroArticle;
