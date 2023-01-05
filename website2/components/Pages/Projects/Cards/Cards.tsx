import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
const Cards = ({ children }: IntCards) => {
	return <ul className={styles.wrapper}>{children}</ul>;
};
export default Cards;
