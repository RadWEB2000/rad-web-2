import styles from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";
import { Dispatch, ReactElement, SetStateAction } from "react";

interface iSearch {
	handle: Dispatch<SetStateAction<string>>;
	placeholder: string;
}

const Search = ({ handle, placeholder }: iSearch): ReactElement => {
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
export default Search;
