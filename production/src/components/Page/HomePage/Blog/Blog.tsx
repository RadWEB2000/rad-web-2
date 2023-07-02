import { HomeBlogCard } from "@default/src/components/Utils/Cards/Blog/HomeBlogCard/HomeBlogCard";
import { Section, iSection } from "../Section/Section";
import styles from "./Blog.module.scss";

interface iBlog extends iSection {
	cards: {
		category: string;
		excerpt: string;
		image: string;
		release: string;
		title: string;
		slug: string;
		uri: string;
	}[];
}

export const Blog = ({ button, cards, content, title }: iBlog) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.section}>
				<Section button={button} content={content} title={title} />
			</div>
			<ul className={styles.cards}>
				{cards
					.sort((a: any, b: any) => {
						const dateA: any = new Date(a.release);
						const dateB: any = new Date(b.release);
						return dateB - dateA;
					})
					.slice(0, 6)
					.map(({ category, image, release, title, uri }) => {
						return (
							<HomeBlogCard
								category={{
									label: category,
									uri: "#",
								}}
								image={{
									alt: title,
									src: image,
									title: title,
								}}
								key={title}
								release={release}
								title={title}
								uri={uri}
							/>
						);
					})}
			</ul>
		</div>
	);
};
