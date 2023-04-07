import {
	Dispatch,
	MutableRefObject,
	ReactElement,
	RefObject,
	SetStateAction,
} from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import styles from "./Permissions.module.scss";
interface iPermissions {
	checkedStatus: boolean;
	content: string;
	detailsRefs: MutableRefObject<(HTMLDetailsElement | null)[]>;
	index: number;
	isChecked?: boolean;
	handleChecked: Dispatch<SetStateAction<boolean>>;
	name: "necessary" | "preferential" | "statistical";
	title: string;
}
const Permissions = ({
	checkedStatus,
	content,
	detailsRefs,
	index,
	isChecked,
	handleChecked,
	name,
	title,
}: iPermissions): ReactElement => {
	return (
		<details
			className={styles.wrapper}
			key={`${title}-${content}`}
			ref={(e) => (detailsRefs.current[index] = e)}
			open={detailsRefs.current[index]?.open}
		>
			<summary>
				<button
					aria-label="expand"
					onClick={() => {
						const detailsRef = detailsRefs.current[index];
						if (detailsRef) {
							detailsRef.open = !detailsRef.open;
						}
					}}
				>
					<FiChevronDown />
				</button>
				<p className={styles.title}>{title}</p>
				{isChecked ? (
					<input checked={isChecked} name={name} title="a" type="checkbox" />
				) : (
					<input
						id={name}
						name={name}
						onChange={(e) => {
							handleChecked(e);
						}}
						title="a"
						type="checkbox"
					/>
				)}
				{isChecked ? (
					<label className={styles.box} htmlFor={name}>
						<MdOutlineDone />
					</label>
				) : (
					<label className={styles.box} htmlFor={name}>
						{checkedStatus ? <MdOutlineDone /> : <></>}
					</label>
				)}
			</summary>
			<div>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</details>
	);
};

export default Permissions;
