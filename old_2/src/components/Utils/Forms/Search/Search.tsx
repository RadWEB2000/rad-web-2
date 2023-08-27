import { Dispatch, FormEventHandler, SetStateAction } from "react";
import styles from "./Search.module.scss";

export interface iSearch {
	handle: Dispatch<SetStateAction<string>>;
	placeholder: string;
}

export const Search = ({ handle, placeholder }: iSearch) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<input
					onChange={(e: any) => handle(e.target.value)}
					type="text"
					name="search"
					id="search"
					placeholder={`${placeholder}...`}
				/>
				<span />
			</div>
		</div>
	);
};
