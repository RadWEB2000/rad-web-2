import styles from "./Code.module.scss";
import { IntCode } from "./interface";
import { ReactElement } from "react";
const Code = ({ children }: IntCode): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<pre>
				<code>{children}</code>
			</pre>
		</div>
	);
};
export default Code;
