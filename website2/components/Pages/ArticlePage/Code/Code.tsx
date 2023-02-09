import styles from "./Code.module.scss";
import { IntCode } from "./interface";
import { ReactElement } from "react";
const Code = ({ code }: IntCode): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<pre>
				<code dangerouslySetInnerHTML={{ __html: code }} />
			</pre>
		</div>
	);
};
export default Code;
