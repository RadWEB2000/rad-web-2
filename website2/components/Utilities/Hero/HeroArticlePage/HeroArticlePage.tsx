import Breadcrumb from "../../Cards/Breadcrumb/Breadcrumb/Breadcrumb";
import { BsClock } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";
import getDate from "../../../../lib/getDate";
import Image from "next/image";
import styles from "./HeroArticlePage.module.scss";
import { IntHeroArticlePage } from "./interface";
import { motion } from "framer-motion";
const HeroArticlePage = ({
	breadcrumbs,
	image,
	lang,
	readingTime,
	release,
	title,
	url,
}: IntHeroArticlePage) => {
	const { day, month, year } = getDate({
		date: release,
		lang: lang,
		variant: "fullname",
	});
	return (
		<div className={styles.wrapper}>
			{breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
			<ul className={styles.socials}>
				<motion.li
					whileHover={{
						scale: 1.05,
					}}
					whileTap={{
						scale: 0.95,
					}}
				>
					<FacebookShareButton url={url}>
						<FaFacebookF />
					</FacebookShareButton>
				</motion.li>
				<motion.li
					whileHover={{
						scale: 1.05,
					}}
					whileTap={{
						scale: 0.95,
					}}
				>
					<LinkedinShareButton url={url}>
						<FaLinkedinIn />
					</LinkedinShareButton>
				</motion.li>
				<motion.li
					whileHover={{
						scale: 1.05,
					}}
					whileTap={{
						scale: 0.95,
					}}
				>
					<TwitterShareButton url={url}>
						<FaTwitter />
					</TwitterShareButton>
				</motion.li>
			</ul>
			<section>
				<h1>{title}</h1>
				<div>
					<p>
						<BsClock />
						{` ${readingTime}min`}
					</p>
					<p>{`${day} ${month} ${year}`}</p>
				</div>
			</section>
			<figure>
				<div>
					<Image
						alt={`${day} ${month} ${year} | ${title}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${day} ${month} ${year} | ${title}`}
						quality={89}
					/>
				</div>
			</figure>
		</div>
	);
};
export default HeroArticlePage;
