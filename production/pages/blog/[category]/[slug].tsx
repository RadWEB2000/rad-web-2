import Layout from "@default/src/components/Layout/Layout";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { HeroArticle } from "@default/src/components/Utils/Hero/HeroArticle/HeroArticle";
import { ArticlePageWrapper } from "@default/src/components/Utils/Wrappers/ArticlePageWrapper/ArticlePageWrapper";
import { MDXRemote } from "next-mdx-remote";
import React, { useEffect, useState } from "react";
import { ArticleComponents } from "@default/src/components/Page/ArticlePage/ArticleComponents/ArticleComponents";
import { Seo } from "@default/src/components/Layout/Seo/Seo";

interface iPage {
	data: {
		seo: {
			articleSection: string;
			canonical: string;
			metaDescription: string;
			metaTitle: string;
			modifiedTime: string;
			openGraphDescription: string;
			openGraphTitle: string;
			publishedTime: string;
			site: string;
			schema: string[] | any[];
			website: string;
		};
		author: string;
		breadcrumbs: {
			path: string;
			title: string;
		}[];
		category: string;
		excerpt: string;
		image: string;
		reading: string;
		release: number;
		title: string;
	};
	source: any;
}

const Page = ({ data, source }: iPage) => {
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
			<HeroArticle
				// breadcrumbs={data?.breadcrumbs}
				category={{
					label: data?.category,
					uri: "#",
				}}
				excerpt={data?.excerpt}
				image={{
					alt: "",
					src: data?.image,
					title: "",
				}}
				isProject={false}
				release={`${data?.release}`}
				title={data?.title}
			/>
			<div
				style={{
					height: "2.5rem",
				}}
			/>
			<ArticlePageWrapper tableOfContents="Spis treści">
				<MDXRemote {...source} components={ArticleComponents} />
			</ArticlePageWrapper>
			{/* <h1>{data.metaTitle}</h1> */}
		</Layout>
	);
};

export default Page;

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: {
		category: string;
		slug: string;
	};
}) => {
	const articleDirectory = `${process.cwd()}/content/pl/articles/${
		params.category
	}/${params.slug}.mdx`;

	const { content, data } = matter(fs.readFileSync(articleDirectory));
	const source = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});
	return {
		props: {
			source,
			data: {
				seo: {
					articleSection: data.articleSection,
					canonical: data.canonical,
					metaDescription: data.metaDescription,
					metaTitle: data.metaTitle,
					modifiedTime: data.modifiedTime,
					openGraphDescription: data.openGraphDescription,
					openGraphTitle: data.openGraphTitle,
					publishedTime: data.publishedTime,
					site: data.site,
					schema: data.schema,
					website: data.website,
				},
				author: data.author,
				breadcrumbs: data.breadcrumbs,
				category: data.category,
				excerpt: data.excerpt,
				image: data.image,
				reading: data.reading,
				release: data.publishedTime,
				title: data.title,
			},
		},
	};
};
