import styles from "./Team.module.scss";
import { HomeAboutUsCard } from "@default/src/components/Utils/Cards/AboutUs/HomeAboutUsCard/HomeAboutUsCard";

interface iMission {
	cards: {
		fullname: string;
		image: string;
		uri: string;
		jobs: string;
	}[];
	content: string;
	title: string;
}

export const Team = ({ cards, content, title }: iMission) => {
	return (
		<article className={styles.wrapper}>
			<header>
				<h2>{title}</h2>
			</header>
			<p dangerouslySetInnerHTML={{ __html: content }} />
			<div>
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
								variant="small"
							/>
						);
					})}
				</ul>
			</div>
		</article>
	);
};
