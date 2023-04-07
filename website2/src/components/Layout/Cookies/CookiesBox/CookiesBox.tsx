import { AnimatePresence } from "framer-motion";
import { MouseEventHandler, MutableRefObject, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import Permissions from "../Permissions/Permissions";
import styles from "./CookiesBox.module.scss";
export interface iCookiesBox {
	info: {
		title: string;
		content: string;
		buttons?: {
			handle: MouseEventHandler;
			title: string;
		}[];
	};
	isOpenCookiesBox?: boolean;
	isOpenCookiesPrefferences?: boolean;
	preferrences: {
		title: string;
		content: string;
		permissions?: {
			name: "necessary" | "preferential" | "statistical";
			title: string;
			content: string;
			isChecked?: boolean;
		}[];
		buttons?: {
			handle: MouseEventHandler;
			title: string;
		}[];
	};
}
const CookiesBox = ({
	info,
	isOpenCookiesBox,
	isOpenCookiesPrefferences,
	preferrences,
}: iCookiesBox) => {
	const checkboxRefs: MutableRefObject<HTMLInputElement[]> = useRef([]);
	const detailsRefs: MutableRefObject<(HTMLDetailsElement | null)[]> = useRef(
		[]
	);
	const [isCheckedStatus, setIsCheckedStatus] = useState(false);

	const [checkedStatuses, setCheckedStatuses] = useState(
		preferrences.permissions?.map(
			(permission) => permission.isChecked ?? false
		) ?? []
	);

	console.log(isCheckedStatus);
	return (
		<div data-open={true} className={styles.wrapper}>
			{!isOpenCookiesPrefferences && (
				<div className={styles.box}>
					<h4 className={styles.title}>{info.title}</h4>
					<p
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: info.content }}
					/>
					{info.buttons && (
						<ul className={styles.buttons}>
							{info.buttons.map(({ handle, title }) => (
								<li className={styles.button} key={title}>
									<button onClick={handle}>{title}</button>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
			{isOpenCookiesPrefferences && (
				<div className={styles.box}>
					<h4 className={styles.title}>{preferrences.title}</h4>
					<p
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: preferrences.content }}
					/>
					{preferrences.permissions && (
						<div className={styles.permissions}>
							{preferrences.permissions.map(
								({ name, title, content, isChecked }, index) => {
									const handleCheckboxChange = (
										e: React.ChangeEvent<HTMLInputElement>
									) => {
										setCheckedStatuses((prevState) => {
											const newState = [...prevState];
											newState[index] = e.target.checked;
											return newState;
										});
									};

									return (
										<Permissions
											checkedStatus={checkedStatuses[index]}
											content={content}
											checkboxRefs={checkboxRefs}
											detailsRefs={detailsRefs}
											index={index}
											key={index}
											handleChecked={handleCheckboxChange}
											name={name}
											title={title}
											isChecked={isChecked}
										/>
									);
								}
							)}
						</div>
					)}
					{preferrences.buttons && (
						<ul className={styles.buttons}>
							{preferrences.buttons.map(({ handle, title }) => (
								<li className={styles.button} key={title}>
									<button onClick={handle}>{title}</button>
								</li>
							))}
						</ul>
					)}
				</div>
			)}
		</div>
	);
};
export default CookiesBox;
