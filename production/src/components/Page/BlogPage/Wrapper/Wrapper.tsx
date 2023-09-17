"use client";
import styles from "@default/components/Page/BlogPage/Wrapper/Wrapper.module.scss";
import BlogCard2 from "@default/components/Utils/Cards/BlogCard2/BlogCard2";
import Search from "@default/components/Utils/Search/Search";
import { iArticlesArray, iArticlesBlogPageCard } from "@default/ts/interfaces";
import { useState } from "react";

type tWrapper = {
	cards: iArticlesBlogPageCard[];
	content: string;
	search?: {
		label: string;
		placeholder: string;
	};
	title: string;
};

export default function Wrapper({ cards, content, search, title }: tWrapper) {
	const [searchValue, setSearchValue] = useState("");
	return (
		<div className={styles.wrapper}>
			<header className={styles.title}>
				<h1>{title}</h1>
			</header>
			<div className={styles.box}>
				<div className={styles.content}>
					{search && (
						<Search
							handle={setSearchValue}
							label={search.label}
							placeholder={search.placeholder}
						/>
					)}
					<section>
						<p dangerouslySetInnerHTML={{ __html: content }} />
					</section>
				</div>
				<div className={styles.cards}>
					{cards
						.filter(({ node: { title } }: { node: { title: string } }) =>
							title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(
							({
								node: {
									categories,
									date,
									excerpt,
									featuredImage,
									post: { author },
									title,
									uri,
								},
							}: iArticlesArray) => {
								console.log(author[0].uri);
								return (
									<BlogCard2
										author={{
											fullname: {
												firstname: author[0].teammate.fullname.firstname,
												lastname: author[0].teammate.fullname.lastname,
											},
											uri: author[0].uri,
										}}
										category={{
											name: categories.edges[0].node.name,
											uri: categories.edges[0].node.uri,
										}}
										date={date}
										excerpt={excerpt}
										image={featuredImage.node}
										key={title}
										title={title}
										uri={uri}
										variant="blog"
									/>
								);
							}
						)}
				</div>
			</div>
		</div>
	);
}
