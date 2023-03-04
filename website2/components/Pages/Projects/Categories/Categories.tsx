import { Dispatch, ReactElement, SetStateAction } from "react";
import { typeProjectCategory } from "../../../../types/types";
import styles from "./Categories.module.scss";
import { motion } from "framer-motion";
interface IntCategories {
	categories: {
		value: typeProjectCategory;
		name: string;
	}[];
	current: typeProjectCategory;
	handle: Dispatch<SetStateAction<typeProjectCategory>>;
}
const Categories = ({
	categories,
	current,
	handle,
}: IntCategories): ReactElement => {
	const getValue = (
		current: typeProjectCategory,
		value: typeProjectCategory
	) => {
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
