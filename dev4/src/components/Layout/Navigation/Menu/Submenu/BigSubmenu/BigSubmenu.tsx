"use client";
import { tMenuArrayItem } from "data/menu";
import { AnimatePresence, motion } from "framer-motion";
import Item from "l_navigation/Menu/Item";
import styles from "l_navigation/Menu/Submenu/BigSubmenu/BigSubmenu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type tBigSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[];
	submenuTitle: {
		[key: string]: string;
	};
};

type tOpenSubmenus = {
	[key: string]: boolean;
};

function Desktop(props: tBigSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

	return (
		<>
			<li className={styles.desktop}>
				<Item
					handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
					label={props.label}
					isExpanded={isOpenSubmenu}
					level={1}
					uri={props.uri}
					theme="expand"
				/>
				{isOpenSubmenu && (
					<AnimatePresence>
						<motion.div
							className={styles.desktop__wrapper}
							onMouseLeave={() => setIsOpenSubmenu(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div className={styles.desktop__menu}>
								<div className={styles.categories}>
									<h3 className={styles.title}>
										{props.submenuTitle.categories}
									</h3>
									<ul className={styles.items}>
										{props.submenu.map((item, index) => {
											return (
												<Item
													label={item.label}
													key={index}
													theme="submenu"
													uri={item.uri}
												/>
											);
										})}
									</ul>
								</div>
								<div className={styles.topics}>
									<h3 className={styles.title}>{props.submenuTitle.topics}</h3>
									<ul className={styles.items}>
										{props.submenu
											.flatMap((item, index) =>
												item.submenu ? [...item.submenu] : []
											)
											.filter(Boolean)
											.map((item, index) => {
												return (
													<Item
														label={item.label}
														key={index}
														theme="submenu"
														uri={item.uri}
													/>
												);
											})}
									</ul>
								</div>
								<div className={styles.article}>
									<div className={styles.image}>
										<Link href="#">
											<figure>
												<Image
													alt=""
													fill
													src="https://images.unsplash.com/photo-1699019950419-ffe12ae956c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
													style={{
														objectFit: "cover",
														objectPosition: "center",
													}}
												/>
											</figure>
										</Link>
									</div>
									<div className={styles.content}>
										<h2 className={styles.title}>
											<Link href="#">
												Czym jest sezonowość słów kluczowych?
											</Link>
										</h2>
										<div className={styles.details}>
											<p className={styles.release}>12-10-2023</p>
											<Link className={styles.category} href="#">
												Programowanie
											</Link>
											<p className={styles.author}>Radosław Adamczyk</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				)}
			</li>
		</>
	);
}

function Mobile(props: tBigSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
	const [openSubmenus, setOpenSubmenus] = useState<tOpenSubmenus>({});

	function handleSecondarySubmenu(label: string) {
		setOpenSubmenus((prevState) => ({
			...prevState,
			[label]: !prevState[label],
		}));
	}
	return (
		<li
			className={`${styles.wrapper} ${styles.mobile}`}
			onMouseLeave={() => setIsOpenSubmenu(false)}
		>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				isExpanded={isOpenSubmenu}
				label={props.label}
				level={1}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<AnimatePresence>
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{props.submenu?.map((item, index) => {
							if (item.submenu) {
								return (
									<li key={index}>
										<Item
											handleSubmenu={() => handleSecondarySubmenu(item.label)}
											label={item.label}
											isExpanded={openSubmenus[item.label]}
											key={index}
											theme="expand"
											level={2}
											uri={item.uri}
										/>
										{openSubmenus[item.label] && (
											<AnimatePresence>
												<motion.ul
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
												>
													{item.submenu?.map((item, index) => {
														return (
															<Item
																label={item.label}
																key={index}
																theme="submenu"
																uri={item.uri}
															/>
														);
													})}
												</motion.ul>
											</AnimatePresence>
										)}
									</li>
								);
							} else {
								return (
									<li key={index}>
										<Item label={item.label} theme="submenu" uri={item.uri} />
									</li>
								);
							}
						})}
					</motion.ul>
				</AnimatePresence>
			)}
		</li>
	);
}

export default function BigSubmenu(props: tBigSubmenu) {
	return (
		<>
			<Desktop
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
			<Mobile
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
		</>
	);
}
