import Layout from "../../components/Layout/Layout/Layout";
import SearchField from "../../components/Utilities/Forms/SearchField/SearchField";
import HeroPage from "../../components/Utilities/Hero/HeroPage/HeroPage";
import { blog } from "./../../data/pages/blog";
import { useEffect, useState } from "react";
import BlogCardBlogPage from "../../components/Utilities/Cards/BlogCards/BlogCardBlogPage/BlogCardBlogPage";
import { posts } from "./../../data/pages/posts";
import Cards from "../../components/Pages/Blog/Cards/Cards";
import { blogpage } from "./../../data/pages/blogpage";
import fs from "fs";
import matter from "gray-matter";

interface IntArticle {
	slug: string;
	category: string;
	release: string;
	excerpt: string;
	image: string;
	title: string;
	lang: string;
}

interface IntPage {
	articles: IntArticle[];
}

const Page = ({ articles }: IntPage) => {
	const [searchValue, setSearchValue] = useState("");
	const { pl } = blog;
	const { pl: plPosts } = posts;
	console.log(articles);
	return (
		<Layout
			image="https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg"
			meta={{
				description: blogpage.pl.main.seo.meta.description,
				title: blogpage.pl.main.seo.meta.title,
			}}
			og={{
				description: blogpage.pl.main.seo.og.description,
				title: blogpage.pl.main.seo.og.title,
				type: "website",
			}}
			schema={{}}
			hero={
				<>
					<HeroPage
						content={blogpage.pl.main.content.hero.content}
						title={blogpage.pl.main.content.hero.title}
					/>
					<SearchField handle={setSearchValue} placeholder={`Szukaj`} />
				</>
			}
		>
			<main>
				<Cards>
					{articles
						?.filter((item: any) =>
							item.title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.sort(
							(a: IntArticle, b: IntArticle) =>
								new Date(b.release).getTime() - new Date(a.release).getTime()
						)
						.map((article: any) => {
							const { category, excerpt, image, release, title, slug } =
								article;
							return (
								<BlogCardBlogPage
									category={category}
									date={release}
									excerpt={excerpt}
									image={image}
									key={title}
									path={`/blog/${category}/${slug}`}
									title={title}
								/>
							);
						})}
				</Cards>
			</main>
		</Layout>
	);
};
export default Page;

export const getStaticProps = ({ params }: { params: any }) => {
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
			articles,
		},
	};
};
