import styles from "@default/components/Page/BlogPage/Hero/Hero.module.scss";

export type tHero = {
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
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		</div>
	);
}
