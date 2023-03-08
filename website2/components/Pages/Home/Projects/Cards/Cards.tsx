import ProjectCard from "../../../../../src/components/Utilities/Cards/ProjectCard/ProjectCard";
import { iProject } from "../../../../../src/ts/interface";
import styles from "./Cards.module.scss";
interface iCards {
	cards: iProject[];
}
const Cards = ({ cards }: iCards) => {
	return (
		<ul className={styles.wrapper}>
			<li className={styles.big}>
				{cards
					?.slice(0, 1)
					.map(({ category, excerpt, image, path, release, title }) => (
						<ProjectCard
							category={category}
							excerpt={excerpt}
							image={image}
							isBig
							key={title}
							path={path}
							release={release}
							title={title}
							variant="home"
						/>
					))}
			</li>
			<li className={styles.small}>
				{cards
					?.slice(1, 5)
					.map(({ category, excerpt, image, path, release, title }) => (
						<ProjectCard
							category={category}
							excerpt={excerpt}
							image={image}
							key={title}
							path={path}
							release={release}
							title={title}
							variant="home"
						/>
					))}
			</li>
		</ul>
	);
};
export default Cards;
