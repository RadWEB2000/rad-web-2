import Image from "next/image";
import hero from "@default/assets/chair.png";
import styles from "@default/components/Pages/HomePage/Hero/Hero.module.scss";
import RegularButton from "@default/components/Utils/Buttons/RegularButton/RegularButton";
import { iImage } from "@default/ts/interfaces";

interface iHero extends iImage {
	buttons: {
		label: string;
		uri: string;
	}[];
	slogan: string;
	title: string;
}

export default function Hero({ buttons, slogan, title }: iHero) {
	return (
		<header className={`hero ${styles.wrapper}`} role="banner">
			<article className={styles.content}>
				<section>
					<header>
						<h1>RadWEB</h1>
						<h2
							dangerouslySetInnerHTML={{ __html: `Podbij z nami internet` }}
						/>
					</header>
					<ul>
						<RegularButton type="link" label="blog" uri="/" />
						<RegularButton type="link" label="kontakt" uri="/" />
					</ul>
				</section>
			</article>
			<div className={styles.image}>
				<figure>
					<Image
						alt=""
						fill
						loading="eager"
						src={hero}
						style={{
							objectFit: "contain",
							objectPosition: "center",
						}}
						quality={90}
					/>
				</figure>
			</div>
		</header>
	);
}
