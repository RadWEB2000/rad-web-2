import PersonCardContactPage from "../../../Utilities/Cards/PersonsCards/PersonCardContactPage/PersonCardContactPage";
import styles from "./Cards.module.scss";
import { peoplesCards } from "../../../../data/pages/peoplesCards";
const Cards = () => {
	const { pl } = peoplesCards;
	return (
		<ul className={styles.wrapper}>
			{pl.map(({ email, fullname, image, jobs, path, phone }) => (
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
