import styles from "@default/components/Page/HomePage/Blog/Blog.module.scss";
import ButtonPrimary from "@default/components/Utils/Buttons/ButtonPrimary/ButtonPrimary";
import BlogCard from "@default/components/Utils/Cards/BlogCard/BlogCard";
import ContentBox from "@default/components/Utils/ContentBox/ContentBox";
import { MoveRight } from "lucide-react";

type tBlog = {
	cards?: any[];
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
							date,
							featuredImage,
							post: { author },
							status,
							title,
							uri,
						},
					}) => {
						return (
							<BlogCard
								author={{
									firstname: author[0].teammate.fullname.firstname,
									lastname: author[0].teammate.fullname.lastname,
								}}
								category={{
									name: categories.edges[0].node.name,
									uri: categories.edges[0].node.uri,
								}}
								date={date}
								image={featuredImage.node}
								key={title}
								status={status}
								title={title}
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
