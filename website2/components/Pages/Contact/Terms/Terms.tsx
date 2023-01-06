import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { IntTerms } from "./interface";
const Terms = ({ content }: IntTerms) => {
	const [isCheck, setIsCheck] = useState(false);
	return (
		<section>
			<label htmlFor="">{isCheck && <AiOutlineCheck />}</label>
			<input
				type="checkbox"
				name=""
				id=""
				onChange={() => setIsCheck(!isCheck)}
			/>
			<p dangerouslySetInnerHTML={{ __html: content }} />
		</section>
	);
};
export default Terms;
