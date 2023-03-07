// import Breadcrumb from "../../Cards/Breadcrumb/Breadcrumb/Breadcrumb";
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
import ButtonPrimary from "./../../Buttons/ButtonPrimary/ButtonPrimary";
import getStack from "./../../../../lib/getStack";
import { CgWebsite } from "react-icons/cg";
import getCapitalize from "../../../../lib/getCapitalize";
import Breadcrumb from "../../../../src/components/Utilities/Breadcrumb/Breadcrumb";
const HeroArticlePage = ({
	breadcrumbs,
	image,
	lang,
	readingTime,
	release,
	tags,
	title,
	url,
	website,
}: IntHeroArticlePage) => {
	const shareUrl = "https://rad-web.vercel.app";
	const { day, month, year } = getDate({
		date: release,
		lang: lang,
		variant: "fullname",
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
						<ButtonPrimary
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
export default HeroArticlePage;
