import RegularAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/RegularAboutUsCard/RegularAboutUsCard";
import styles from "@default/components/Page/AboutUsPage/Team/Team.module.scss";

type tTeam = {
	cards: {
		node: {
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
			};
			teammate: {
				fullname: {
					firstname: string;
					lastname: string;
				};
				job: {
					jobName: string;
				}[];
			};
			uri: string;
		};
	}[];
	title: string;
	content: string;
};

export default function Team({ cards, content, title }: tTeam) {
	return (
		<div className={styles.wrapper}>
			<section className={styles.details}>
				<header className={styles.title}>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</section>
			<ul className={styles.cards}>
				{cards?.reverse().map(
					({
						node: {
							featuredImage,
							teammate: {
								fullname: { firstname, lastname },
								job,
							},
							uri,
						},
					}) => {
						return (
							<RegularAboutUsCard
								fullname={`${firstname} ${lastname}`}
								image={{
									alt: featuredImage.node.altText,
									src: featuredImage.node.sourceUrl,
									title: featuredImage.node.title,
								}}
								key={uri}
								jobs={job}
								uri={uri}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
