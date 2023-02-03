import PersonCardContactPage from "../../../Utilities/Cards/PersonsCards/PersonCardContactPage/PersonCardContactPage";
import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
const Cards = ({ cards }: IntCards) => {
	return (
		<ul className={styles.wrapper}>
			{cards.map(({ email, fullname, image, jobs, path, phone }) => (
				<PersonCardContactPage
					email={{ ...email }}
					fullname={{ ...fullname }}
					image={image}
					job={jobs}
					key={jobs}
					path={path}
					phone={{ ...phone }}
				/>
			))}
		</ul>
	);
};
export default Cards;
