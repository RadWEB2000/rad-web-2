import BlogCard from "../../../src/components/Utilities/Cards/BlogCard/BlogCard";
import CardsWrapper from "./../../../src/components/Utilities/Cards/CardsWrapper/CardsWrapper";
import fs from "fs";
import HeroPage from "../../../src/components/Utilities/Hero/HeroPage/HeroPage";
import Layout from "../../../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import Search from "../../../src/components/Utilities/Form/Search/Search";
import { useState } from "react";
import { iArticle } from "../../../src/ts/interface";
import { blogpage } from "./../../../content/pages/blogpage";

interface IntPage {
	articles: iArticle[];
	currentQuery: string;
	page: {
		seo: {
			image: string;
			meta: {
				description: string;
				title: string;
			};
			og: {
				description: string;
				title: string;
			};
		};
		path: string;
		hero: {
			content: string;
			title: string;
		};
	};
}

const Page = ({ articles, currentQuery, page }: IntPage) => {
	const [searchValue, setSearchValue] = useState("");
	return (
		<Layout
			image={page?.seo.image}
			meta={{
				description: page?.seo.meta.description,
				title: page?.seo.meta.title,
			}}
			og={{
				description: page?.seo.og.description,
				title: page?.seo.og.title,
				type: "website",
			}}
			schema={{}}
			hero={
				<>
					<HeroPage content={page?.hero.content} title={page?.hero.title} />
					<Search handle={setSearchValue} placeholder={`Szukaj`} />
				</>
			}
		>
			<main>
				<CardsWrapper variant="articles">
					{articles
						?.filter(
							(item: any) =>
								item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
								item.excerpt.toLowerCase().includes(searchValue.toLowerCase())
						)
						.sort(
							(a: iArticle, b: iArticle) =>
								new Date(b.release).getTime() - new Date(a.release).getTime()
						)
						.map((article: any) => {
							const { category, excerpt, image, release, title, slug } =
								article;

							return (
								<>
									{category === currentQuery && (
										<BlogCard
											release={release}
											excerpt={excerpt}
											image={image}
											key={title}
											path={`/blog/${category}/${slug}`}
											title={title}
										/>
									)}
								</>
							);
						})}
				</CardsWrapper>
			</main>
		</Layout>
	);
};
export default Page;
export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
export const getStaticProps = ({ params }: { params: any }) => {
	const getData = () => {
		if (params.category == "programowanie") {
			return blogpage.pl.subpage.programming;
		} else if (params.category === "pozycjonowanie") {
			return blogpage.pl.subpage.seo;
		} else {
			return blogpage.pl.subpage.seo;
		}
	};

	const { seo, content, path } = getData();

	const articlesDirectory = `${process.cwd()}/content/articles`;
	const articlesFiles = fs
		.readdirSync(articlesDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const articles = articlesFiles.map((file) => {
		const path = `${articlesDirectory}/${file}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			slug: file.replace(/\.mdx$/, ""),
			category: data.category,
			release: `${data.release}`,
			excerpt: data.excerpt,
			image: data.image,
			title: data.title,
			lang: data.lang,
		};
	});
	return {
		props: {
			currentQuery: params.category,
			page: {
				seo: {
					image: seo.image,
					meta: {
						description: seo.meta.description,
						title: seo.meta.title,
					},
					og: {
						description: seo.og.description,
						title: seo.og.title,
					},
				},
				path: path,
				hero: {
					content: content.content,
					title: content.title,
				},
			},
			articles,
		},
	};
};
