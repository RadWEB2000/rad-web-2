import Breadcrumb from "../../Breadcrumb/Breadcrumb";
import getStack from "../../../../../lib/getStack";
import Image from "next/image";
import RegularButton from "./../../Buttons/RegularButton/RegularButton";
import styles from "./HeroArticle.module.scss";
import { BsClock } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { getCapitalize } from "./../../../../lib/functions/getCapitalize";
import { getDate } from "../../../../lib/functions/getDate";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from "react-share";
import { motion } from "framer-motion";

interface iHeroArticle {
	breadcrumbs: {
		path: string;
		title: string;
	}[];
	image: string;
	lang: "pl" | "en" | "es";
	readingTime: string | number;
	release: string;
	title: string;
	url: string;
	tags?: string[];
	website?: string;
}

const HeroArticle = ({
	breadcrumbs,
	image,
	lang,
	readingTime,
	release,
	tags,
	title,
	website,
}: iHeroArticle) => {
	console.log(website);
	const shareUrl = "https://rad-web.vercel.app";
	const { day, month, year } = getDate({
		date: release,
		lang: lang,
		variant: "long",
	});
	return (
		<div className={styles.wrapper}>
			{breadcrumbs && <Breadcrumb breadcrumb={breadcrumbs} />}
			<ul className={styles.socials}>
				<motion.li
					whileHover={{
						scale: 1.05,
					}}
					whileTap={{
						scale: 0.95,
					}}
				>
					<FacebookShareButton url={shareUrl}>
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
					<LinkedinShareButton url={shareUrl}>
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
					<TwitterShareButton url={shareUrl}>
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
				{tags && (
					<ul className={styles.stacks}>
						{tags.map((item: string, index: number) => (
							<>
								{getStack(item).name !== null && (
									<li
										aria-label={`${getStack(item).name}`}
										className={styles.stack}
										title={`${getStack(item).name}`}
									>
										{getStack(item).icon}
									</li>
								)}
							</>
						))}
					</ul>
				)}
				{website && (
					<div className={styles.website}>
						<RegularButton
							path={website}
							title={`Zapraszamy na stronę ${getCapitalize(title)}`}
							variant="primary"
						/>
					</div>
				)}
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
export default HeroArticle;
