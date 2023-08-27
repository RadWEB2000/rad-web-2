"use client";
import RegularButton from "@default/components/Utils/Buttons/RegularButton/RegularButton";
import { iImage } from "@default/ts/interfaces";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import tileBackground from "@default/assets/tile-background.png";
import styles from "@default/components/Pages/HomePage/Services/Services.module.scss";

interface iServiceCard extends iImage {
	content: string;
	label: string;
	title: string;
	uri: string;
}

function ServiceCard({ content, image, label, title, uri }: iServiceCard) {
	const [isExpand, setIsExpand] = useState<boolean>(false);
	return (
		<li className={styles.card}>
			<div className={styles.top}>
				<div className={styles.title}>
					<h2>{title}</h2>
				</div>
				<div className={styles.button}>
					<button data-expand={isExpand} onClick={() => setIsExpand(!isExpand)}>
						<span />
						<span />
					</button>
				</div>
			</div>
			{isExpand && (
				<AnimatePresence>
					<motion.div
						className={styles.bottom}
						data-expand={isExpand}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
					>
						<figure>
							<Image
								alt={image.alt}
								fill
								src={image.src}
								style={{
									objectFit: "cover",
									objectPosition: "center",
								}}
								title={image.title}
								quality={60}
							/>
						</figure>
						<div>
							<p dangerouslySetInnerHTML={{ __html: content }} />
							<div>
								<Link href={uri}>{label}</Link>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			)}
		</li>
	);
}

export default function Services() {
	return (
		<div className={styles.wrapper}>
			<article className={styles.content}>
				<div className={styles.image}>
					<Image
						fill
						style={{ objectFit: "contain" }}
						src={tileBackground}
						alt=""
					/>
				</div>
				<section>
					<header>
						<h2>Usługi, czyli czym się zajmujemy</h2>
					</header>
					<p>
						Veritatis sit et non. Velit neque rerum inventore. Natus eos quos
						at. Adipisci corrupti mollitia optio odio quibusdam et. Cupiditate
						qui aliquam.Voluptatum id ratione nihil dolorum quod odit
						repellendus ut repellat. Earum molestias aut. Assumenda perspiciatis
						omnis est nam pariatur dolores qui recusandae.Quis fugit at
						reiciendis quaerat quo. Facilis quia ex. Et eum ullam quia iste rem.
						Quidem delectus maiores adipisci.
					</p>
				</section>
				<RegularButton type="link" label="więcej" uri="/" />
				<ul className={styles.cards}>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1689782419975-0d74c954eb58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
							title: "",
						}}
						label="więcej"
						title="Strony internetowe"
						uri="#"
					/>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1689595244175-90c22a553086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
							title: "",
						}}
						label="więcej"
						title="Pozycjonowanie stron internetowych"
						uri="#"
					/>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1689595244175-90c22a553086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
							title: "",
						}}
						label="więcej"
						title="Pozycjonowanie stron internetowych"
						uri="#"
					/>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1689595244175-90c22a553086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
							title: "",
						}}
						label="więcej"
						title="Pozycjonowanie stron internetowych"
						uri="#"
					/>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1689595244175-90c22a553086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
							title: "",
						}}
						label="więcej"
						title="Pozycjonowanie stron internetowych"
						uri="#"
					/>
					<ServiceCard
						content={`Culpa molestias et velit voluptas odit rerum deserunt dolor. Velit inventore nisi eum quia iste quasi quo inventore optio. Magni qui explicabo nostrum fugit earum iste. Adipisci esse ut. Asperiores qui corporis aspernatur. Perferendis molestias harum doloribus cumque quibusdam quis atque animi dolorum. Perferendis quisquam quibusdam et.`}
						image={{
							alt: "#",
							src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
							title: "",
						}}
						label="więcej"
						title="Kampanie Google Ads"
						uri="#"
					/>
				</ul>
			</article>
		</div>
	);
}
