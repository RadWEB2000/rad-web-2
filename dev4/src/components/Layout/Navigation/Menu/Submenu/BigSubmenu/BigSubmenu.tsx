"use client";
import Image from "next/image";
import Item from "l_navigation/Menu/Item";
import { tMenuArrayItem } from "data/menu";
import { useState } from "react";
import styles from "l_navigation/Menu/Submenu/BigSubmenu/BigSubmenu.module.scss";

type tBigSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[]; // Zmień na tMenuArrayItem[]
	submenuTitle: {
		[key: string]: string;
	};
};

type tOpenSubmenus = {
	[key: string]: boolean;
};

function Desktop(props: tBigSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
	const [isOpenSubmenuSecondary, setIsOpenSubmenuSecondary] = useState(false);
	return (
		<li className={`${styles.wrapper} ${styles.desktop}`}>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				label={props.label}
				isExpanded={isOpenSubmenu}
				level={1}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<div>
					<div>
						<h3>{props.submenuTitle.categories}</h3>
						<ul>
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
					<div>
						<h3>{props.submenuTitle.topics}</h3>
						<ul>
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
					<div>
						<div>
							<figure>
								<Image
									alt=""
									height={240}
									src="https://images.unsplash.com/photo-1699019950419-ffe12ae956c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
									width={240}
								/>
							</figure>
						</div>
						<div>
							<h2>React dokumentacje</h2>
						</div>
					</div>
				</div>
			)}
		</li>
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
		<li className={`${styles.wrapper} ${styles.mobile}`}>
			<Item
				handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
				isExpanded={isOpenSubmenu}
				label={props.label}
				level={1}
				uri={props.uri}
				theme="expand"
			/>
			{isOpenSubmenu && (
				<ul>
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
										<ul>
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
										</ul>
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
				</ul>
			)}
		</li>
	);
}

export default function BigSubmenu(props: tBigSubmenu) {
	return (
		<>
			{/* <Desktop
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/> */}
			<Mobile
				label={props.label}
				submenu={props.submenu}
				submenuTitle={props.submenuTitle}
				uri={props.uri}
			/>
		</>
	);
}
