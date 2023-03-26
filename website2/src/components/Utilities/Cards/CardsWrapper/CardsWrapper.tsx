import styles from "./CardsWrapper.module.scss";
import { ReactElement } from "react";
interface iCardsWrapper {
	children: ReactElement | ReactElement[];
	variant: "contact" | "articles" | "hp-articles";
}
const CardsWrapper = ({ children, variant }: iCardsWrapper): ReactElement => {
	return (
		<ul className={styles.wrapper} data-variant={variant}>
			{children}
		</ul>
	);
};
export default CardsWrapper;
