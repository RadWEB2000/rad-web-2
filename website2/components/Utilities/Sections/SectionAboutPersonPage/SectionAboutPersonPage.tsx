import Image from "next/image";
import styles from "./SectionAboutPersonPage.module.scss";
import { IntSectionAboutPersonPage } from "./interface";

const SectionAboutPersonPage = ({
	content,
	iframe,
	image,
	title,
}: IntSectionAboutPersonPage) => {
	return (
		<div className={styles.wrapper}>
			<section className={styles.content}>
				<h2>{title}</h2>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
			{image && (
				<div className={styles.image}>
					<figure>
						<Image
							alt={title}
							fill
							src={image}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={title}
						/>
					</figure>
				</div>
			)}
			{iframe && (
				<div className={styles.iframe}>
					<iframe
						src={iframe}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen={true}
					/>
				</div>
			)}
		</div>
	);
};
export default SectionAboutPersonPage;
