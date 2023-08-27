"use client";
import styles from "@default/components/Page/BlogPage/Wrapper/Wrapper.module.scss";
import RegularBlogCard from "@default/components/Utils/Cards/BlogCard/RegularBlogCard/RegularBlogCard";
import Search, { tSearch } from "@default/components/Utils/Search/Search";
import { iArticlesArray } from "@default/ts/interfaces";
import { useState } from "react";

type tWrapper = {
	cards: iArticlesArray[];
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
								return (
									<RegularBlogCard
										author={{
											firstname: author[0].teammate.fullname.firstname,
											lastname: author[0].teammate.fullname.lastname,
										}}
										category={{
											name: categories.edges[0].node.name,
											uri: categories.edges[0].node.uri,
										}}
										date={date}
										excerpt={excerpt}
										image={{
											alt: featuredImage.node.altText,
											src: featuredImage.node.sourceUrl,
											title: featuredImage.node.title,
										}}
										key={title}
										title={title}
										uri={uri}
									/>
								);
							}
						)}
				</div>
			</div>
		</div>
	);
}
