import styles from "./HeroPage.module.scss";

interface iHeroPage {
	content: string;
	image: string;
	title: string;
}

export const HeroPage = ({ content, image, title }: iHeroPage) => {
	return (
		<div
			className={`headerWrapper ${styles.wrapper}`}
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<section>
				<header>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
		</div>
	);
};
