import { Dispatch, ReactElement, SetStateAction } from "react";
import styles from "./Categories.module.scss";
import { motion } from "framer-motion";
import { tProjectCategory } from "../../../../ts/types";
interface IntCategories {
	categories: {
		value: tProjectCategory;
		name: string;
	}[];
	current: tProjectCategory;
	handle: Dispatch<SetStateAction<tProjectCategory>>;
}
const Categories = ({
	categories,
	current,
	handle,
}: IntCategories): ReactElement => {
	const getValue = (current: tProjectCategory, value: tProjectCategory) => {
		if (current !== value) {
			return handle(value);
		} else if (current !== "") {
			return handle("");
		} else {
			return handle(value);
		}
	};

	return (
		<ul className={styles.wrapper}>
			{categories.map(({ name, value }) => (
				<motion.li
					data-checked={current === value ? true : false}
					key={name}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<button onClick={() => getValue(current, value)}>
						<p>{name}</p>
					</button>
				</motion.li>
			))}
		</ul>
	);
};

export default Categories;
