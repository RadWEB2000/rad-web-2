"use client";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import { tImage } from "@default/ts/types";
import Image from "next/image";
import styles from "@default/components/Page/HomePage/Hero/Hero.module.scss";

type tHero = {
	buttons: {
		label: string;
		uri: string;
	}[];
	image: tImage;
	slogan: string;
	title: string;
};

//

export default function Hero({ buttons, image, slogan, title }: tHero) {
	return (
		<div className={styles.wrapper}>
			<figure className={styles.image}>
				<Image
					alt={image.alt}
					fill
					loading="eager"
					src={image.src}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
					title={image.title}
					quality={20}
				/>
			</figure>
			<section className={styles.content}>
				<header className={styles.title}>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<h2
					className={styles.slogan}
					dangerouslySetInnerHTML={{ __html: slogan }}
				/>
				<div className={styles.buttons}>
					{buttons.map(({ label, uri }, index) => {
						return (
							<ButtonPrimary
								key={index}
								label={label}
								theme="primary"
								uri={uri}
								variant="link"
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
}
