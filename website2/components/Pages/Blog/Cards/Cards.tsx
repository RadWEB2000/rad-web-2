import styles from "./Cards.module.scss";
import { IntCards } from "./interface";
import { ReactElement } from "react";
const Cards = ({ children }: IntCards): ReactElement => {
	return <ul className={styles.wrapper}>{children}</ul>;
};
export default Cards;
