import ProjectHomePageCard from "../../../../Utilities/Cards/ProjectCards/ProjectHomePageCard/ProjectHomePageCard";
import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
const Cards = ({ cards }: IntCards) => {
	return (
		<ul className={styles.wrapper}>
			<li className={styles.big}>
				{cards?.slice(0, 1).map(({ category, excerpt, image, path, title }) => (
					<ProjectHomePageCard
						category={{
							name: category.name,
							value: category.value,
						}}
						excerpt={excerpt}
						image={image}
						isBig={true}
						key={title}
						path={path}
						title={title}
					/>
				))}
			</li>
			<li className={styles.small}>
				{cards?.slice(1, 5).map(({ category, excerpt, image, path, title }) => (
					<ProjectHomePageCard
						category={{
							name: category.name,
							value: category.value,
						}}
						excerpt={excerpt}
						image={image}
						isBig={false}
						key={title}
						path={path}
						title={title}
					/>
				))}
			</li>
		</ul>
	);
};
export default Cards;
