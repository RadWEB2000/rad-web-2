import styles from "@default/components/Page/ProjectsPage/Hero/Hero.module.scss";
import Content from "../../PostPage/Content/Content";

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
				<Content content={content} />
			</section>
		</div>
	);
}
