import styles from "./Terms.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { IntTerms } from "./interface";
import { useState } from "react";
interface iTerms {
	content: string;
	handle: any;
	value: boolean;
}
const Terms = ({ content, handle, value }: iTerms) => {
	return (
		<section className={styles.wrapper}>
			<label htmlFor="terms">{value && <AiOutlineCheck />}</label>
			<input id="terms" name="terms" onChange={handle} type="checkbox" />
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</section>
	);
};
export default Terms;
