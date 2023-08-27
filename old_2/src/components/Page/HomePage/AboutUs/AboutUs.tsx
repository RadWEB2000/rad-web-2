import styles from "./AboutUs.module.scss";
import { about } from "@default/src/data/about";
import { HomeAboutUsCard } from "@default/src/components/Utils/Cards/AboutUs/HomeAboutUsCard/HomeAboutUsCard";
import { Section, iSection } from "../Section/Section";

interface iAboutUs extends iSection {
	cards: {
		fullname: string;
		image: string;
		uri: string;
		jobs: string;
	}[];
}

export const AboutUs = ({ cards, content, title, button }: iAboutUs) => {
	return (
		<div className={styles.wrapper}>
			<Section content={content} title={title} button={button} />
			<ul>
				{cards.reverse().map(({ fullname, image, jobs, uri }) => {
					return (
						<HomeAboutUsCard
							fullname={fullname}
							image={{
								alt: `${fullname} - ${jobs}`,
								src: image,
								title: `${fullname} - ${jobs}`,
							}}
							jobs={jobs}
							key={image}
							uri={uri}
						/>
					);
				})}
			</ul>
		</div>
	);
};
