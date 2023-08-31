import ContactAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/ContactAboutUsCard/ContactAboutUsCard";
import styles from "@default/components/Page/ContactPage/AboutUs/AboutUs.module.scss";

type tAboutUs = {
	button: string;
	cards: {
		node: {
			teammate: {
				fullname: {
					firstname: string;
					lastname: string;
				};
				email: string;

				job: {
					jobName: string;
				}[];
				locations: {
					city: string;
				}[];
				phone: {
					label: string;
					value: string;
				};
				socialMedia: {
					url: string;
				}[];
			};
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					title: string;
				};
			};
			uri: string;
		};
	}[];
	content: string;
	title: string;
};

export default function AboutUs({ button, cards, content, title }: tAboutUs) {
	return (
		<div>
			<section className={styles.box}>
				<header>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
			<ul className={styles.cards}>
				{cards.map(
					({
						node: {
							featuredImage: {
								node: { altText, sourceUrl, title },
							},
							teammate: {
								fullname: { firstname, lastname },
								job,
								locations,
								socialMedia,
								email,
								phone,
							},
							uri,
						},
					}) => {
						return (
							<ContactAboutUsCard
								button={button}
								email={email}
								fullname={`${firstname} ${lastname}`}
								image={{
									altText,
									sourceUrl,
									title,
								}}
								jobs={job}
								key={uri}
								locations={locations}
								phone={phone}
								socialMedia={socialMedia}
								uri={uri}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
