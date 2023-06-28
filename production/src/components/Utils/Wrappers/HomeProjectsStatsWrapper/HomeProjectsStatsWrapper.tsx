import styles from "./HomeProjectsStatsWrapper.module.scss";

interface iHomeProjectsStatsWrapper {
	children: JSX.Element | JSX.Element[];
}

export const HomeProjectsStatsWrapper = ({
	children,
}: iHomeProjectsStatsWrapper) => {
	return <div className={styles.wrapper}>{children}</div>;
};
