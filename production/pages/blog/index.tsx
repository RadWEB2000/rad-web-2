import Layout from "@default/src/components/Layout/Layout";
import { RegularBlogCard } from "@default/src/components/Utils/Cards/Blog/RegularBlogCard/RegularBlogCard";
import { Search } from "@default/src/components/Utils/Forms/Search/Search";
import { HeroPage } from "@default/src/components/Utils/Hero/HeroPage/HeroPage";
import { BlogCardsWrapper } from "@default/src/components/Utils/Wrappers/BlogCardsWrapper/BlogCardsWrapper";
import matter from "gray-matter";
import { useState } from "react";
import fs from "fs";
import blogPage from "@default/content/pl/pages/blog/start";
import { Seo } from "@default/src/components/Layout/Seo/Seo";

interface iPage {
	articles: {
		image: string;
		title: string;
		release: string;
		category: string;
		slug: string;
		excerpt: string;
		uri: string;
	}[];
}

const Page = ({ articles }: iPage) => {
	const { hero, seo } = blogPage;
	const [searchValue, setSearchValue] = useState("");
	return (
		<Layout>
			<Seo
				image={seo.image}
				metaDescription={seo.metaDescription}
				metaTitle={seo.metaTitle}
				openGraphDescription={seo.openGraphDescription}
				openGraphTitle={seo.openGraphTitle}
				website={seo.website}
				articleSection={seo.articleSection}
				canonical={seo.canonical}
				modifiedTime={seo.modifiedTime}
				publishedTime={seo.publishedTime}
				schema={seo.schema}
			/>
			<HeroPage content={hero.content} image={hero.image} title={hero.title} />
			<Search handle={setSearchValue} placeholder="Szukaj" />
			<BlogCardsWrapper>
				{articles
					?.filter((item: any) =>
						item.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map(({ category, excerpt, title, image, release, uri }) => {
						return (
							<RegularBlogCard
								category={{
									label: category,
									uri: "#",
								}}
								excerpt={excerpt}
								key={title}
								image={{
									alt: "",
									src: image,
									title: "",
								}}
								release={release}
								title={title}
								uri={uri}
							/>
						);
					})}
			</BlogCardsWrapper>
		</Layout>
	);
};

export default Page;

export const getStaticProps = () => {
	const articlesDirectory: string = `${process.cwd()}/content/pl/articles`;
	const getArticlesSubdirectories = () => {
		const subdirectories = fs
			.readdirSync(articlesDirectory, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);
		return subdirectories;
	};

	const getArticles = () => {
		const articles = getArticlesSubdirectories().map((item) => {
			const subarticlesDirectory = `${articlesDirectory}/${item}`;
			const articlesFiles = fs
				.readdirSync(subarticlesDirectory)
				.filter((file) => file.endsWith(".mdx"));
			return articlesFiles.map((file) => {
				const path = `${subarticlesDirectory}/${file}`;
				const contents = fs.readFileSync(path, "utf8");
				const { data } = matter(contents);
				return {
					category: data.category,
					excerpt: data.excerpt,
					image: data.image,
					release: data.publishedTime,
					title: data.title,
					slug: data.slug,
					uri: `/blog/${data.category}/${data.slug}`,
				};
			});
		});
		return articles;
	};
	const articles = getArticles().flat();
	console.log("articles ssr", articles);
	return {
		props: {
			articles,
		},
	};
};
