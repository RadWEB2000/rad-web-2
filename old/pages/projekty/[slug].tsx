import fs from "fs";
import HeroArticle from "../../src/components/Utilities/Hero/HeroArticle/HeroArticle";
import Layout from "../../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import path from "path";
import { ArticleComponents } from "../../src/components/Pages/ArticlePage/ArticleComponents/ArticleComponents";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { GET_PROJECT } from "../../src/lib/queries/project";
import { useQuery } from "@apollo/client";
import client from "../../src/lib/apollo/apollo";
import { GET_PROJECTS } from "../../src/lib/queries/projects";

const Page = ({ data }: { data: any }) => {
	const {
		content,
		date,
		excerpt,
		featuredImage,
		rodzajeProjekty: typesOfProject,
		seo,
		slug,
		technologie: technologies,
		title,
		uri,
	} = data;

	return (
		<Layout
			hero={
				<HeroArticle
					breadcrumbs={[]}
					image={featuredImage.node.sourceUrl}
					lang={"pl"}
					readingTime={seo.readingTime.toFixed()}
					release={date}
					title={title}
					tags={technologies}
					url={`https://rad-web.vercel.app/projekty/${uri}`}
					website={""}
				/>
			}
			image={""}
			meta={{
				description: "",
				title: "",
			}}
			schema={{}}
			og={{
				description: "",
				title: "",
				type: "website",
			}}
		>
			<main
				style={{
					marginTop: "15rem",
				}}
				className="articleMain"
			>
				<b className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
				<div
					className="article"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	const { data } = await client.query({
		query: GET_PROJECTS,
	});
	const paths =
		data && data.posts
			? data.posts.edges.map(({ node }: { node: any }) => ({
					params: { slug: node.slug },
			  }))
			: [];
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const { slug } = params;
	const { data } = await client.query({
		query: GET_PROJECT,
		variables: { uri: `/projekty/${slug}` },
	});

	return {
		props: {
			data: data.projectBy,
		},
	};
};
