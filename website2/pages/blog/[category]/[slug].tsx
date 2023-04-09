import fs from "fs";
import HeroArticle from "../../../src/components/Utilities/Hero/HeroArticle/HeroArticle";
import Layout from "../../../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import path from "path";
import { ArticleComponents } from "../../../src/components/Pages/ArticlePage/ArticleComponents/ArticleComponents";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const Page = ({ frontMatter, source }: { frontMatter: any; source: any }) => {
	return (
		<Layout
			hero={
				<HeroArticle
					breadcrumbs={frontMatter.breadcrumbs}
					image={frontMatter.image}
					lang={frontMatter.lang}
					readingTime={frontMatter.reading}
					release={frontMatter.release}
					title={frontMatter.title}
					url={`https://rad-web.vercel.app/projekty/${frontMatter.category}/${frontMatter.slug}`}
				/>
			}
			image={frontMatter.image}
			meta={{
				description: frontMatter.metaDescription,
				title: frontMatter.metaTitle,
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
				<b
					className="excerpt"
					dangerouslySetInnerHTML={{ __html: frontMatter.excerpt }}
				/>
				<MDXRemote {...source} components={ArticleComponents} />
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), "content", "articles");
	const filenames = fs.readdirSync(postsDirectory);
	const paths = filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContnents = fs.readFileSync(filePath);
		const { data } = matter(fileContnents);
		return {
			params: {
				category: data.category,
				slug: filename.replace(/\.mdx/, ""),
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: { params: any }) => {
	const { slug } = params;
	const filePath = path.join(
		process.cwd(),
		"content",
		"articles",
		`${slug}.mdx`
	);
	const fileContents = fs.readFileSync(filePath);
	const { content, data } = matter(fileContents);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});
	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};
