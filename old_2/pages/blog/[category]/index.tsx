import Layout from "@default/src/components/Layout/Layout";
import { RegularBlogCard } from "@default/src/components/Utils/Cards/Blog/RegularBlogCard/RegularBlogCard";
import { Search } from "@default/src/components/Utils/Forms/Search/Search";
import { HeroPage } from "@default/src/components/Utils/Hero/HeroPage/HeroPage";
import { BlogCardsWrapper } from "@default/src/components/Utils/Wrappers/BlogCardsWrapper/BlogCardsWrapper";
import matter from "gray-matter";
import { useState } from "react";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
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
	data: {
		content: string;
		image: string;
		title: string;
		seo: {
			articleSection: string;
			canonical: string;
			metaDescription: string;
			metaTitle: string;
			modifiedTime: string;
			openGraphDescription: string;
			openGraphTitle: string;
			site: string;
			website: string;
			publishedTime: string;
			schema: string[];
		};
	};
	source: any;
}

const Page = ({ articles, data, source }: iPage) => {
	const [searchValue, setSearchValue] = useState("");
	console.log(data?.seo);
	return (
		<Layout>
			<Seo
				image={data?.image}
				metaDescription={data?.seo.metaDescription}
				metaTitle={data?.seo.metaTitle}
				openGraphDescription={data?.seo.openGraphDescription}
				openGraphTitle={data?.seo.openGraphTitle}
				website={data?.seo.website}
				articleSection={data?.seo.articleSection}
				canonical={data?.seo.canonical}
				modifiedTime={data?.seo.modifiedTime}
				publishedTime={data?.seo.publishedTime}
				schema={data?.seo.schema}
			/>
			<HeroPage
				content={data?.content}
				image={data?.image}
				title={data?.title}
			/>
			<Search handle={setSearchValue} placeholder="Szukaj" />
			<BlogCardsWrapper>
				{articles
					?.sort((a: any, b: any) => {
						const dateA: any = new Date(a.release);
						const dateB: any = new Date(b.release);
						return dateB - dateA;
					})
					.filter((item: any) =>
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

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: {
		category: string;
	};
}) => {
	const pageDirectory = `${process.cwd()}/content/pl/pages/blog/${
		params.category
	}.mdx`;

	const { content, data } = matter(fs.readFileSync(pageDirectory));
	const source = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	const articlesDirectory = `${process.cwd()}/content/pl/articles/${
		params.category
	}`;
	const articlesFiles = fs
		.readdirSync(articlesDirectory)
		.filter((file) => file.endsWith(".mdx"));
	const articles = articlesFiles.map((file) => {
		const path = `${articlesDirectory}/${file}`;
		const contents = fs.readFileSync(path, "utf8");
		const { data } = matter(contents);
		return {
			image: data.image,
			title: data.title,
			release: data.publishedTime,
			category: data.category,
			slug: data.slug,
			uri: `/blog/${data.category}/${data.slug}`,
			excerpt: data.excerpt,
		};
	});

	return {
		props: {
			articles,
			data: {
				content: data.content,
				image: data.image,
				title: data.title,
				seo: {
					articleSection: data.articleSection,
					canonical: data.canonical,
					metaDescription: data.metaDescription,
					metaTitle: data.metaTitle,
					modifiedTime: data.modifiedTime,
					openGraphDescription: data.openGraphDescription,
					openGraphTitle: data.openGraphTitle,
					publishedTime: data.publishedTime,
					schema: data.schema,
					site: data.site,
					website: data.site,
				},
			},
			// source,
		},
	};
};
