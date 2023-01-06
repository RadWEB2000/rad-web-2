import styles from "./Terms.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { IntTerms } from "./interface";
import { useState } from "react";
const Terms = ({ content }: IntTerms) => {
	const [isCheck, setIsCheck] = useState(false);
	return (
		<section className={styles.wrapper}>
			<label htmlFor="terms">{isCheck && <AiOutlineCheck />}</label>
			<input
				id="terms"
				name="terms"
				onChange={() => setIsCheck(!isCheck)}
				type="checkbox"
			/>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</section>
	);
};
export default Terms;
