import styles from "./BlogCardsWrapper.module.scss";

export interface iBlogCardsWrapper {
	children: JSX.Element | JSX.Element[];
}

export const BlogCardsWrapper = ({ children }: iBlogCardsWrapper) => {
	return (
		<div className={styles.wrapper}>
			<ul>{children}</ul>
		</div>
	);
};
