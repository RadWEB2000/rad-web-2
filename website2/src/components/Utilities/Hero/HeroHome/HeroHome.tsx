import RegularButton from "../../Buttons/RegularButton/RegularButton";
import styles from "./HeroHome.module.scss";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";
import { ReactElement } from "react";

interface iHeroHome {
	buttons: {
		path: string;
		title: string;
	}[];
	cards: {
		content: string;
		image: string;
		title: string;
	}[];
	content: string;
	title: string;
}

const HeroHome = ({
	buttons,
	cards,
	content,
	title,
}: iHeroHome): ReactElement => {
	return (
		<section className={styles.wrapper}>
			<div>
				<section>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
					<p dangerouslySetInnerHTML={{ __html: content }} />
					<ul>
						{buttons.map(({ path, title }) => (
							<RegularButton
								key={`${path} - ${title}`}
								path={path}
								title={title}
								variant="primary"
							/>
						))}
					</ul>
				</section>
			</div>
			<ul className={styles.cards}>
				<div>
					{cards.slice(0, 4).map(({ content, image, title }) => (
						<ServiceCard
							content={content}
							image={image}
							key={`${content} - ${image} - ${title}`}
							variant="homepage-card"
							title={title}
						/>
					))}
				</div>
			</ul>
		</section>
	);
};
export default HeroHome;
