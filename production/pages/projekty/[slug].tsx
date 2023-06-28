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
import { HeroProject } from "@default/src/components/Utils/Hero/HeroProject/HeroProject";
import { ProjectPageWrapper } from "@default/src/components/Utils/Wrappers/ProjectPageWrapper/ProjectPageWrapper";
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
		category: {
			name: string;
			uri: string;
		}[];
		excerpt: string;
		image: string;
		release: string;
		projectUrl: string;
		reading: number;
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
			<HeroProject
				excerpt={data?.excerpt}
				image={{
					alt: data?.title,
					src: data?.image,
					title: data?.title,
				}}
				title={data?.title}
				website={{
					label: "Odwiedź stronę",
					uri: `${data?.projectUrl}`,
				}}
			/>
			<ProjectPageWrapper>
				<MDXRemote {...source} components={ArticleComponents} />
			</ProjectPageWrapper>
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
		slug: string;
	};
}) => {
	const articleDirectory = `${process.cwd()}/content/pl/projects/${
		params.slug
	}.mdx`;

	const { content, data } = matter(fs.readFileSync(articleDirectory));

	const source = await serialize(content, {
		mdxOptions: {
			recmaPlugins: [],
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
				category: data.category,
				excerpt: data.excerpt,
				image: data.image,
				release: data.publishedTime,
				projectUrl: data.projectUrl,
				reading: data.reading,
				title: data.title,
			},
		},
	};
};
