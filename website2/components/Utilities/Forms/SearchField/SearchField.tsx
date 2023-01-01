import styles from "./SearchField.module.scss";
import { BsSearch } from "react-icons/bs";
import { ReactElement, useState } from "react";
import { IntSearchField } from "./interface";
const SearchField = ({ handle, placeholder }: IntSearchField): ReactElement => {
	return (
		<div className={styles.wrapper}>
			<input
				id="search"
				onChange={(e) => handle(e.target.value)}
				name="search"
				placeholder={placeholder}
				role="search"
				type="text"
			/>
			<span>
				<BsSearch />
			</span>
		</div>
	);
};
export default SearchField;
