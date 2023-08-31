import styles from "@default/components/Page/ContactPage/Hero/Hero.module.scss";

interface iHero {
	content: string;
	title: string;
}

export default function Hero({ content, title }: iHero) {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		</div>
	);
}
