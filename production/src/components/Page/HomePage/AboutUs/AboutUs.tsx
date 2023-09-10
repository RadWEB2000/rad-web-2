import styles from "@default/components/Page/HomePage/AboutUs/AboutUs.module.scss";
import AboutUsCard from "@default/components/Utils/Cards/AboutUsCard/AboutUsCard";
import { tImage2 } from "@default/ts/types";

type tAboutUs = {
	cards?: {
		node: {
			featuredImage: {
				node: tImage2;
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
	content: string;
	title: string;
};

export default function AboutUs({ cards, content, title }: tAboutUs) {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<p dangerouslySetInnerHTML={{ __html: content }} />
			</section>
			<ul>
				{cards?.map(
					(
						{
							node: {
								featuredImage,
								teammate: {
									fullname: { firstname, lastname },
									job,
								},
								uri,
							},
						},
						index
					) => {
						return (
							<AboutUsCard
								fullname={`${firstname} ${lastname}`}
								image={featuredImage.node}
								jobs={job}
								key={index}
								uri={uri}
								theme="home"
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
