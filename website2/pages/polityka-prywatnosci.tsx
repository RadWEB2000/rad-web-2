import fs from "fs";
import HeroPage from "../src/components/Utilities/Hero/HeroPage/HeroPage";
import Layout from "../src/components/Layout/Layout/Layout";
import matter from "gray-matter";
import { ArticleComponents } from "./../src/components/Pages/ArticlePage/ArticleComponents/ArticleComponents";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
interface iPage {
	data: {
		image: string;
		metaDescription: string;
		metaTitle: string;
		ogDescription: string;
		ogTitle: string;
		slug: string;
		title: string;
	};
	source: any;
}
const Page = ({ data, source }: iPage) => {
	const { image, metaDescription, metaTitle, ogDescription, ogTitle, title } =
		data;
	return (
		<Layout
			image={image}
			meta={{
				description: metaDescription,
				title: metaTitle,
			}}
			og={{
				description: ogDescription,
				title: ogTitle,
				type: "website",
			}}
			schema={{}}
			hero={<HeroPage content="" title={title} />}
		>
			<main
				style={{
					marginTop: "15rem",
				}}
				className="articleMain"
			>
				<MDXRemote {...source} components={ArticleComponents} />
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = async () => {
	const { data, content } = matter(
		fs.readFileSync(
			`${process.cwd()}/content/pages/polityka-prywatnosci.mdx`,
			"utf8"
		)
	);
	const source = await serialize(content);
	return {
		props: {
			data,
			source,
		},
	};
};
