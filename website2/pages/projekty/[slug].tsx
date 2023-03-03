import fs from "fs";
import readingTime from "reading-time";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/Layout/Layout/Layout";
import HeroArticlePage from "../../components/Utilities/Hero/HeroArticlePage/HeroArticlePage";
import { ArticleComponents } from "../../components/Pages/ArticlePage/ArticleComponents/ArticleComponents";

const Page = ({ frontMatter, source }: { frontMatter: any; source: any }) => {
	const readTime = readingTime(source);
	console.log(frontMatter.release);
	return (
		<Layout
			hero={
				<HeroArticlePage
					breadcrumbs={frontMatter.breadcrumbs}
					image={frontMatter.image}
					lang={"pl"}
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
				{/* <h1>{`https://rad-web.vercel.app/projekty/${frontMatter.category}/${frontMatter.slug}`}</h1> */}
				<MDXRemote {...source} components={ArticleComponents} />
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), "content", "projects", "pl");
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
			// data,
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
		"projects",
		"pl",
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
