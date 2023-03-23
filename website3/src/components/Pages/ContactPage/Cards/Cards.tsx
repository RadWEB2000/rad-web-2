import PersonCard from "../../../Utilities/Cards/PersonCard/PersonCard";
import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
const Cards = ({ cards }: IntCards) => {
	return (
		<ul className={styles.wrapper}>
			{cards.map(({ email, fullname, image, jobs, path, phone }) => (
				<PersonCard
					cities=""
					email={email.address}
					fullname={{
						firstname: fullname.firstname,
						lastname: fullname.lastname,
					}}
					image={image}
					jobs={jobs}
					key={`${fullname.firstname} - ${fullname.lastname} - contact`}
					path={path}
					phone={phone.address}
					variant="contact"
				/>
			))}
		</ul>
	);
};
export default Cards;
