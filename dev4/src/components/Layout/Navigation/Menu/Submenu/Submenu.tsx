"use client";
import { tMenuArrayItem } from "data/menu";
import Item from "l_navigation/Menu/Item";
import Image from "next/image";
import styles from "l_navigation/Menu/Submenu/Submenu.module.scss";
import { useState } from "react";

type tSubmenu = {
	label: string;
	uri: string;
	submenu: tMenuArrayItem[]; // Zmień na tMenuArrayItem[]
	submenuTheme: "big" | "small";
	submenuTitle: {
		[key: string]: string;
	};
};

export default function Submenu(props: tSubmenu) {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

	if (props.submenuTheme === "small") {
		return (
			<li className={styles.small__wrapper}>
				<Item
					handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
					label={props.label}
					uri={props.uri}
					theme="expand"
				/>
				{isOpenSubmenu && (
					<ul>
						{props.submenu?.map((item, index) => {
							if (item.submenu !== null) {
								return (
									<li key={item.label}>
										<Item
											label={item.label}
											key={index}
											theme="submenu"
											level={1}
											uri={item.uri}
										/>
										<ul>
											{item.submenu?.map((item, index) => {
												return (
													<Item
														label={item.label}
														key={index}
														theme="submenu"
														level={2}
														uri={item.uri}
													/>
												);
											})}
										</ul>
									</li>
								);
							} else {
								return (
									<li key={index}>
										<Item
											label={item.label}
											theme="submenu"
											level={1}
											uri={item.uri}
										/>
									</li>
								);
							}
						})}
					</ul>
				)}
			</li>
		);
	} else if (props.submenuTheme === "big") {
		return (
			<>
				<li className={styles.big__wrapper} data-device="mobile">
					<Item
						handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
						label={props.label}
						uri={props.uri}
						theme="expand"
					/>
					{isOpenSubmenu && (
						<ul>
							{props.submenu?.map(({ label, submenu, uri }) => {
								if (submenu !== null) {
									return (
										<li key={label}>
											<Item
												label={label}
												key={label}
												theme="submenu"
												level={1}
												uri={uri}
											/>
											<ul>
												{submenu?.map(({ label, uri }) => {
													return (
														<Item
															label={label}
															key={label}
															theme="submenu"
															level={2}
															uri={uri}
														/>
													);
												})}
											</ul>
										</li>
									);
								} else {
									return (
										<li key={label}>
											<Item
												label={label}
												key={label}
												theme="submenu"
												level={1}
												uri={uri}
											/>
										</li>
									);
								}
							})}
						</ul>
					)}
				</li>
				<li className={styles.big__wrapper} data-device="desktop">
					<Item
						handleSubmenu={() => setIsOpenSubmenu(!isOpenSubmenu)}
						label={props.label}
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
												level={2}
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
													level={2}
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
			</>
		);
	}
}
