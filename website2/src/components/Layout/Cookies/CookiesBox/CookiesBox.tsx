import { AnimatePresence } from "framer-motion";
import { MouseEventHandler, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
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
	const detailsRefs = useRef([]);
	console.log(detailsRefs);
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
									const detailsRef = detailsRefs.current[index];
									const isOpen = detailsRef?.open;
									console.log(isOpen);
									return (
										<details
											className={styles.permission}
											key={`${title}-${content}`}
										    ref={(e) => (detailsRefs.current[index] = e)}
    open={detailsRefs.current[index]?.open}
										>
											<summary>
												<button
													aria-label="expand"
													onClick={() => (  const detailsRef = detailsRefs.current[index];
														detailsRef.open = !detailsRef.open;)}
												>
													<FiChevronDown />
												</button>
												<p className={styles.title}>{title}</p>
												<input
													checked={isChecked}
													type="checkbox"
													title="a"
													name={name}
													id={name}
												/>
												<label className={styles.box} htmlFor={name}>
													<MdOutlineDone />
												</label>
											</summary>
											{!detailsRef?.current[index]?.open && (
												<div>
													<p dangerouslySetInnerHTML={{ __html: content }} />
												</div>
											)}
										</details>
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
