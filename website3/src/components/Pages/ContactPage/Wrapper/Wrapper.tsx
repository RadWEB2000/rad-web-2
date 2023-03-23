import styles from "./Wrapper.module.scss";
import { IntWrapper } from "./interface";
import { ReactElement } from "react";
const Wrapper = ({ children }: IntWrapper): ReactElement => {
	return <div className={styles.wrapper}>{children}</div>;
};
export default Wrapper;
