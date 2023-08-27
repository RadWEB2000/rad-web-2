import styles from "@default/components/Pages/BlogPage/Hero/Hero.module.scss";
import dev from "@default/assets/dev.svg";
import Image from "next/image";

interface iHero {
	content: string;
	title: string;
}

export default function Hero({ content, title }: iHero) {
	return (
		<header className={`hero ${styles.wrapper}`}>
			<article className={styles.box}>
				<header className={styles.title}>
					<h1>{title}</h1>
				</header>
				<p
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</article>

			<figure className={styles.image}>
				<Image
					alt=""
					fill
					src={dev}
					style={{
						objectFit: "contain",
						objectPosition: "center",
					}}
					title=""
					quality={85}
				/>
			</figure>
		</header>
	);
}
