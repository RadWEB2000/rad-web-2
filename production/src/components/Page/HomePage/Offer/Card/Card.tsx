"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from "@default/components/Page/HomePage/Offer/Card/Card.module.scss";

export type tCard = {
	button: null | string;
	content: string;
	title: string;
	uri: null | string;
};

export default function Card({ button, content, title, uri }: tCard) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<li className={styles.wrapper}>
			<div className={styles.head} data-open={isOpen}>
				<header className={styles.title} data-open={isOpen}>
					<h3 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<div className={styles.button}>
					<button data-open={isOpen} onClick={() => setIsOpen(!isOpen)}>
						<span />
						<span />
					</button>
				</div>
			</div>
			{isOpen && (
				<div className={styles.body}>
					<div className={styles.content}>
						<section dangerouslySetInnerHTML={{ __html: content }} />
					</div>
					{button !== null && uri !== null && (
						<div className={styles.link}>
							<Link href={uri}>{button}</Link>
						</div>
					)}
				</div>
			)}
		</li>
	);
}
