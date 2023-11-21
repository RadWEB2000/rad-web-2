"use client";
import { tBigSubmenu } from "l_navigation/Menu/Submenu/BigSubmenu/BigSubmenu";
import { AnimatePresence, motion } from "framer-motion";
import Item from "l_navigation/Menu/Item";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "l_navigation/Menu/Submenu/BigSubmenu/Desktop/Desktop.module.scss";

export default function Desktop(props: tBigSubmenu) {
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
							onMouseLeave={() => setIsOpenSubmenu(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div className={styles.container}>
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
