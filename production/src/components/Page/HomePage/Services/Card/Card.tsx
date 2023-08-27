"use client";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import styles from "@default/components/Page/HomePage/Services/Card/Card.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

export type tCard = {
	button: null | string;
	color: string;
	image: {
		altText: string;
		sourceUrl: string;
		title: string;
	};
	title: string;
	uri: null | string;
};

export default function Card({ button, color, image, title, uri }: tCard) {
	const [boxShadow, setBoxShadow] = useState(`inset 0 0 0 0 ${color}`);
	return (
		<li
			className={styles.wrapper}
			style={{
				boxShadow: boxShadow,
			}}
			onMouseEnter={() => setBoxShadow(`inset 0 0 6rem 1rem ${color}`)}
			onMouseLeave={() => setBoxShadow(`inset 0 0 0 0 ${color}`)}
		>
			<figure className={styles.image}>
				<Image
					alt={image.altText}
					fill
					src={image.sourceUrl}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image.title}
				/>
			</figure>
			<div className={styles.content}>
				<h2
					dangerouslySetInnerHTML={{ __html: title }}
					style={{
						backgroundColor: color,
					}}
				/>
				{uri && button && (
					<div>
						<ButtonPrimary
							theme="secondary"
							uri={uri}
							icon={<BsArrowRight />}
							label={button}
							variant="link"
						/>
					</div>
				)}
			</div>
		</li>
	);
}
