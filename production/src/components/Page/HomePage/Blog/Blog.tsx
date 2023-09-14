import styles from "@default/components/Page/HomePage/Blog/Blog.module.scss";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import BlogCard from "@default/components/Utils/Cards/BlogCard/BlogCard";
import BlogCard2 from "@default/components/Utils/Cards/BlogCard2/BlogCard2";
import ContentBox from "@default/components/Utils/ContentBox/ContentBox";
import { tImage2 } from "@default/ts/types";
import { MoveRight } from "lucide-react";

type tBlog = {
	cards?: {
		node: {
			categories: {
				edges: {
					node: {
						name: string;
						uri: string;
					};
				}[];
			};
			post: {
				author: {
					teammate: {
						fullname: {
							firstname: string;
							lastname: string;
						};
						uri: string;
					};
				};
				title: string;
				uri: string;
				date: string;
				featuredImage: {
					node: tImage2;
				};
			};
		};
	}[];
	button: {
		label: string;
		uri: string;
	};
	content: string;
	title: string;
};

export default function Blog({
	button: { label, uri },
	cards,
	content,
	title,
}: tBlog) {
	return (
		<div className={styles.wrapper}>
			<section>
				<header>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
				</header>
				<ContentBox content={content} theme="section" variant="light" />
				<ButtonPrimary
					label={label}
					theme="tertiary"
					uri={uri}
					icon={<MoveRight />}
					variant="link"
				/>
			</section>
			<ul>
				{cards?.map(
					({
						node: {
							categories,
							post: { author, date, featuredImage, title, uri },
						},
					}) => {
						return (
							<BlogCard2
								author={author.teammate}
								category={categories.edges[0].node}
								date={date}
								image={featuredImage?.node}
								key={title}
								title={title}
								uri={uri}
								variant="home"
							/>
						);
					}
				)}
			</ul>
		</div>
	);
}
