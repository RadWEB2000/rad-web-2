"use client";
import styles from "@default/components/Utils/Search/Search.module.scss";

export type tSearch = {
	handle: (newSearchValue: string) => void;
	label: string;
	placeholder: string;
};

export default function Search({ handle, label, placeholder }: tSearch) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<label
					className={styles.label}
					dangerouslySetInnerHTML={{ __html: label }}
					htmlFor="search"
				/>
				<input
					className={styles.input}
					onInput={(e: any) => handle(e.target.value)}
					placeholder={placeholder}
					type="text"
				/>
			</div>
		</div>
	);
}
