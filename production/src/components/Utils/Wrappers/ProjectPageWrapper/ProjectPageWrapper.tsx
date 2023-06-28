import styles from "./ProjectPageWrapper.module.scss";

interface iProjectPageWrapper {
	children: JSX.Element | JSX.Element[];
}

export const ProjectPageWrapper = ({ children }: iProjectPageWrapper) => {
	return <main className={styles.wrapper}>{children}</main>;
};
