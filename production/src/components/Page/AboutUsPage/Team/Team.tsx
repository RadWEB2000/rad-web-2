import styles from "@default/components/Page/AboutUsPage/Team/Team.module.scss";
import AboutUsCard from "@default/components/Utils/Cards/AboutUsCard/AboutUsCard";

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
							<AboutUsCard
								fullname={`${firstname} ${lastname}`}
								image={featuredImage.node}
								key={uri}
								jobs={job}
								uri={uri}
								theme="regular"
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
