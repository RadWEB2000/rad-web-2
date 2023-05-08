import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.scss";
import { motion } from "framer-motion";

interface iServiceCard {
	content: string;
	image: string;
	title: string;
	path?: string;
	variant: "homepage-card";
}

const ServiceCard = ({
	content,
	image,
	path = "",
	title,
	variant,
}: iServiceCard) => {
	if (variant === "homepage-card") {
		return (
			<motion.li
				className={styles.wrapper__homepage__card}
				whileTap={{
					scale: 0.9,
				}}
			>
				<Link href={path} legacyBehavior>
					<a>
						<figure>
							<div>
								<Image
									alt=""
									fill
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
									src={image}
								/>
							</div>
						</figure>
						<figcaption>
							<h4>{title}</h4>
							<p dangerouslySetInnerHTML={{ __html: content }} />
						</figcaption>
					</a>
				</Link>
			</motion.li>
		);
	} else return null;
};

export default ServiceCard;
