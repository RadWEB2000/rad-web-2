import ButtonPrimary from "../../../../../Utilities/Buttons/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import styles from "./Slide.module.scss";
import { IntSlide } from "./interface";
import { ReactElement } from "react";
const Slide = ({
	button,
	content,
	image,
	path,
	title,
}: IntSlide): ReactElement => {
	return (
		<li className={styles.wrapper}>
			<div className={styles.image}>
				<figure>
					<Image
						alt={`${title}`}
						fill
						src={image}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						title={`${title}`}
						quality={80}
					/>
				</figure>
			</div>
			<section className={styles.content}>
				<h2>{title}</h2>
				<p dangerouslySetInnerHTML={{ __html: content }} />
				{/* <ButtonPrimary path={path} title={button} variant="tertiary" /> */}
			</section>
		</li>
	);
};
export default Slide;
