"use client";
import styles from "@default/components/Page/HomePage/AboutUs/AboutUs.module.scss";
import RegularAboutUsCard from "@default/components/Utils/Cards/AboutUsCard/HomeAboutUsCard/HomeAboutUsCard";

type tAboutUs = {
	cards?: {
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
							<RegularAboutUsCard
								fullname={`${firstname} ${lastname}`}
								image={{
									alt: featuredImage.node.altText,
									src: featuredImage.node.sourceUrl,
									title: featuredImage.node.title,
								}}
								jobs={job}
								key={index}
								uri={uri}
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
