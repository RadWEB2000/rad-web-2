import styles from "./ProjectCardsWrapper.module.scss";

export interface iProjectCardsWrapper {
	children: JSX.Element | JSX.Element[];
}

export const ProjectCardsWrapper = ({ children }: iProjectCardsWrapper) => {
	return (
		<div className={styles.wrapper}>
			<ul>{children}</ul>
		</div>
	);
};
