import styles from "@default/components/Page/AboutUsPage/Hero/Hero.module.scss";

type tHero = {
	content: string;
	title: string;
};

export default function Hero({ content, title }: tHero) {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
			</section>
			<div>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</div>
	);
}
